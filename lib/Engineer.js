const { createPromptModule } = require("inquirer");

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

//this exports the class to be used
module.exports = Engineer;


