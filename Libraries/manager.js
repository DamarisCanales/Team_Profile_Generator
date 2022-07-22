
// EMPLOYEE OBJECT CONSTRUCTOR //
const Employee = require('./employee');

// EXTEND MANAGER CLASS FROM EMPLOYEE CLASS //
class Manager extends Employee {
    constructor (name, gitHub, eID, email, officeNumber, school) {
       
        super (name, gitHub, eID, email, school); 
        this.officeNumber = officeNumber; 
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager; 