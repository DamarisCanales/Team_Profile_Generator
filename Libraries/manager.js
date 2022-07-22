
// EMPLOYEE OBJECT CONSTRUCTOR //
const Employee = require('./employee');

// EXTEND MANAGER CLASS FROM EMPLOYEE CLASS //
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
       
        super (name, id, email); 
        
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