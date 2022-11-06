const { createPromptModule } = require("inquirer");

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = userName;
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
        return "userName";
    }
}

//this exports the class to be used
module.exports = Engineer;


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, 
// and GitHub username, and I am taken back to the menu