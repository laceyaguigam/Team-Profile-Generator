//make sure to put in the notes section did review with instructional staff

// lines 4-10 are everything that needs to be required in
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const { idArray } = require("util/types")

// paths
const OUTPUT_DIR = path.resolve(_dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager(){
        console.log("Please build your team")
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
            validate: answer => {
                const pass = answer.match(/\$+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.ManagerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([ {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            Chocies: [
                "Engineer",
                "Intern",
                "I dont want to add any more members"
            ]
        }
    ]).then (userChoice => {
        switch (userChoice.memberChoice){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
    }

    function addEngineer(){
        inquirer.prompt([ {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: answer => {
                const pass = answer.match(/\$+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }

    ]).then(answers => {
            const engineer = add Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
        }

    function addIntern(){
        inquirer.prompt([ {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the interns's ID?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
            validate: answer => {
                const pass = answer.match(/\$+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]).then(answers => {
        const intern = add Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
    }

    function buildTeam(){
        // create the output directory if the output path doesnt exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();
}

appMenu();



