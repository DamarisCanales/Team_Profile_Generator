    
 
// GENERATE ARRAY FOR EMPLOYEE CARD HTML STRINGS//
module.exports = generatePage = (data) => {
    let employeeCards = [];
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const position = employee.getRole(); 

        if (position === "manager") {
            const managerCard = generateManagerSection(employee);
            employeeCards.push(managerCard);
        }

        if (position === 'stylist') {
            const engineerCard = generateStylistSection(employee);
            employeeCards.push(engineerCard);
        }

        if (position === 'makeup') {
            const internCard = generateMakeupArtistSection(employee);
            employeeCards.push(internCard);
        }
        
        if (position === 'hair') {
            const internCard = generateHairStylistSection(employee);
            employeeCards.push(internCard);
        }
    }

    const employeeListHTMLString = employeeCards.join('');

    const HTMLpage = generateFullHTML(employeeListHTMLString);
    return HTMLpage;
}



// GENERATE FULL HTML PAGE
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


// GENERATE MANAGER SECTION //
const generateManagerSection = (manager) => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${manager.name}</h2>
            <h4>Manager</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${manager.eID}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber"> Office Number: ${manager.officeNumber}</p>
         </div>
    </div>
    `;
}

// GENERATE STYLIST SECTION //
const generateStylistSection = (stylist) => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${stylist.name}</h2>
            <h4>Engineer</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${stylist.eID}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${stylist.email}">${stylist.email}</a></p>
            <p class="gitHub"> GitHub: <a class="link-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/${stylist.github}">${stylist.github}</a></p>
         </div>
    </div>
    `;
}

// GENERATE MAKEUP ARTIST SECTION //
const generateMakeupArtistSection = () => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${makeup.name}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${makeup.eID}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${makeup.email}">${makeup.email}</a></p>
            <p class="gitHub"> School: ${makeup.school}</p>
         </div>
    </div>
    `;
}

// GENERATE MAKEUP ARTIST SECTION //
const generateHairStylistSection = () => {
    return `
     <div class="card col-md-3 col-sm-6 border-0">
        <div class="card-header bg-primary bg-gradient text-white">
            <h2>${hair.name}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body border">
            <p class="eid"> Employee ID: ${hair.eID}</p>
            <p class="email"> Email: <a class="link-primary" href="mailto:${hair.email}">${hair.email}</a></p>
            <p class="gitHub"> School: ${hair.school}</p>
         </div>
    </div>
    `;
}
