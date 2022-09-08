// CREATE MANAGER SECTION //
const generateManagerSection = (manager) => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${manager.name}</h2>
            <h4>Manager</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${manager.eid}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber"> Office Number: ${manager.officeNumber}</p>
         </div>
    </div>
    `;
}

// GENERATE ENGINEER SECTION //
const generateEngineerSection = (engineer) => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${engineer.name}</h2>
            <h4>Engineer</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${engineer.eid}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="gitHub"> GitHub: <a class="link-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
         </div>
    </div>
    `;
}

// GENERATE INTERN SECTION //
const generateInternSection = (intern) => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${intern.name}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${intern.eid}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="gitHub"> School: ${intern.school}</p>
         </div>
    </div>
    `;
}

// GENERATE FULL HTML PAGE //
const generateFullHTML = (employeeListHTMLString) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <title> team profile builder </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
        <h1 class="team text-primary">the team</h1>
        <section class="card-container row justify-content-center">
            ${employeeListHTMLString}
        <section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = generatePage = (data) => {
    // GENERATE ARRAY TO CONTAIN EMPLOYEE CARDS //
    let employeeCards = [];
    // DATA LOOP TO GENERATE THE EMPLOYEE SECTIONS //
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const position = employee.getRole(); 

        if (position === "Manager") {
            const managerCard = generateManagerSection(employee);
            employeeCards.push(managerCard);
        }

        if (position === 'Engineer') {
            const engineerCard = generateEngineerSection(employee);
            employeeCards.push(engineerCard);
        }

        if (position === 'Intern') {
            const internCard = generateInternSection(employee);
            employeeCards.push(internCard);
        }
        
    }

    // JOIN STRINGS //
    const employeeListHTMLString = employeeCards.join('');

    // STRING TO GENERATE FULL HTML PAGE //
    const HTMLpage = generateFullHTML(employeeListHTMLString);
    return HTMLpage;
}
