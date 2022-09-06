// EMPLOYEE CLASS CONSTRUCTOR //
const Employee = require('./employee');

// EXTEND ENGINEER CLASS //
class Engineer extends Employee {
    constructor (name, id, github, email) {
        super (name, id, email); 
        this.github = github; 
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.github;
    }

}

module.exports = Engineer; 