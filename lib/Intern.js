const { createPromptModule } = require("inquirer");

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school= school;
    }
//these are methods
    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

//this exports the class to be used
module.exports = Intern;



