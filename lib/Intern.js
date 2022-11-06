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
        return this.Email;
    }

    getSchool(){
        return this.School;
    }
}

//this exports the class to be used
module.exports = Intern;



