// APPLICATION PACKAGES //
// inquirer import//
const inquirer = require("inquirer");
const fs = require("fs");

// CLASS CONTRUCTOR LIBRARIES //
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// JS MODULE TO GENERATE PAGE //
const generatePage = require("./src/generatePage");

// TEAM OBJECT STORAGE ARRAY//
const team = [];

// GENERATE USER INPUT THROUGH PROMPT ARRRAYS //
const createTeam = async () => {
  `
        ------------------
        | ADD A NEW TEAM |
        ------------------

        `;
  return await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide the manager's full name:",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please provide the manager's full name:");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "eid",
        message: "Please enter the manager's employee ID:",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's employee ID:");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the manager's email address:",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please provide the manager's email address:");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number:",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's office number:");
            return false;
          }
        },
      },
    ])
    .then((input) => {
      const { name, eid, officeNumber, email } = input;
      const manager = new Manager(name, eid, officeNumber, email);
      team.push(manager);
      addMember()
        .then((team) => {
          console.log("...generating page ...");
          return generatePage(team);
        })
        .then((pageString) => {
          console.log("...writing file ...");
          const pageOutput = fs.writeFile("./team.html", pageString, (err) => {
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

        -----------------
        | ADD EMPLOYEES |
        -----------------

        `
  );
  return inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "Please select employee's position:",
        choices: ["engineer", "intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter the employee's full name",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("what is the employee's full name?");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "eid",
        message: "what is the employee's employee ID ?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("please enter the employee's employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "what is the employee's email address ?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("please enter the employee's email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "what is the engineer's github username ?",
        when: (input) => input.position === "engineer",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("please enter the engineers's github username.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "what is the intern's school ?",
        when: (input) => input.position === "intern",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("please enter the interns's school.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addAnotherMember",
        message: "would you like to add another employee ?",
        default: "true",
      },
    ])
    .then((input) => {
      console.log(input);
      if (input.position === "engineer") {
        const { name, eid, email, github } = input;
        const engineer = new Engineer(name, eid, email, github);
        team.push(engineer);
      }
      if (input.position === "intern") {
        const { name, eid, email, school } = input;
        const intern = new Intern(name, eid, email, school);
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
