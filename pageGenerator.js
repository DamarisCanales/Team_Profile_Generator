    
 
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