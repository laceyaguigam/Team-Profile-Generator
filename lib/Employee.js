const { createPromptModule } = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//these are methods
    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.Email;
    }

    getRole(){
        return "Employee";
    }
}

//this exports the class to be used
module.exports = Employee;