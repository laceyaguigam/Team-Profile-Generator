//imports employee.js to file
cosnt Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager";
    }

    getofficeNumber() {
        return this.officeNumber
    }
} 

//exports file to index
module.exports = Manager;



// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or 
// to finish building my team