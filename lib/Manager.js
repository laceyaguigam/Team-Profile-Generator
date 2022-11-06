//imports employee.js to file
const Employee = require("./Employee")

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



