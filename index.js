// PACKAGES NEEDED FOR APPLICATION //
const inquirer = require("inquirer");
const fs = require("fs");

// CLASS CONSTRUCTOR LIBRARIES //
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// JS MODULE PAGE GENERATION //
const generatePage = require("./src/generatePage");

// ARRAY TO STORE TEAM OBJECTS //
const team = [];

// ARRAY OF PROMPTS FOR USER INPUT //
const createTeam = async () => {
  console.log(
    `
        -----------------
        | CREATE A TEAM |
        -----------------

        `
  );
  return await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "eID",
        message: "What is the manager's employee ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's office number.");
            return false;
          }
        },
      },
    ])
    .then((input) => {
      const { name, eID, email, officeNumber } = input;
      const manager = new Manager(name, eID, email, officeNumber);
      team.push(manager);
      addMember()
        .then((team) => {
          console.log("generating page ...");
          return generatePage(team);
        })
        .then((pageString) => {
          console.log("writing file ...");
          const pageOutput = fs.writeFile("./index.html", pageString, (err) => {
            err ? console.error(err) : console.log("html created");
          });
          return pageOutput;
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

const addMember = async () => {
  console.log(
    `

        -----------------------------
        | ADD EMPLOYEES TO THE TEAM |
        -----------------------------

        `
  );
  return inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "Please select the employee's position:",
        choices: [ "intern", "engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the employee's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "eID",
        message: "What is the employee's employee ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the employee's employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the employee's email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
        when: (input) => input.position === "engineer",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the engineers's github username.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        when: (input) => input.position === "intern",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the interns's school.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addAnotherMember",
        message: "Would you like to add another employee?",
        default: "true",
      },
    ])
    .then((input) => {
      if (input.position === "engineer") {
        const { name, eID, email, github } = input;
        const engineer = new Engineer(name, eID, email, github);
        team.push(engineer);
      }
      if (input.position === "intern") {
        const { name, eID, email, school } = input;
        const intern = new Intern(name, eID, email, school);
        team.push(intern);
      }
      if (input.addAnotherMember) {
        return addMember(team);
      }
      if (!input.addAnotherMember) {
        return team;
      }
    });
};

createTeam();
