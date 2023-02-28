//make sure to put in the notes section did review with instructional staff

// lines 4-10 are everything that needs to be required in
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
// const { idArray } = require("util/types")
// const render = require("./src/pageTemplate")
// paths
const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

function buildTeam(){
    // create the output directory if the output path doesnt exist
    // if (!fs.existsSync(OUTPUT_DIR)) {
    //     fs.mkdirSync(OUTPUT_DIR)
    // }
    console.log(teamMembers)
    // fs.writeFileSync('./dist/team.html', render(teamMembers), "utf-8");
    fs.writeFileSync('./dist/team.html', `
    <!DOCTYPE html>
<html lang="en">

<head> <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>My Team</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid align-items-center border-primary">
        <div class="row row-cols-1 row-cols-md-3 g-4 align-items-center">
            <div class="team-area col-12 d-flex justify-content-center">
    `);
    for (let i = 0; i < teamMembers.length; i++) {
        console.log(teamMembers[i])
        
        fs.appendFileSync('./dist/team.html', `
        <div class="card employee-card shadow h-100">
        <div class="card-header bg-primary">
                <h2 class="card-title text-white"> ${teamMembers[i].getName()} </h2>
             </div>
             <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item"> ID: ${teamMembers[i].id}</li>
                    <li class="list-group-item"?> Email: <a href="mailto: ${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                    <li class="list-group-item">  ${teamMembers[i].special}</li>
                </ul>
            <div>
        <div> 
        `
        
        )
    }
    fs.appendFileSync('./dist/team.html', `
    </div>
    </div>
</div>
</body>
</html>`)
    // console.log(render(teamMembers))
}

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
            // validate: answer => {
            //     const pass = answer.match(/\$+@\S+\.\S+/);
            //     if (pass) {
            //         return true;
            //     }
            //     return "Please enter a valid email address.";
            // }
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
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            manager.special = answers.managerOfficeNumber
            teamMembers.push(manager);
            // idArray.push(answers.managerId);
           return createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([ {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
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
            // validate: answer => {
            //     const pass = answer.match(/\$+@\S+\.\S+/);
            //     if (pass) {
            //         return true;
            //     }
            //     return "Please enter a valid email address.";
            // }
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
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineer.special = answers.engineerGithub
            teamMembers.push(engineer);
            // idArray.push(answers.engineerId);
           return createTeam();
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
            // validate: answer => {
            //     const pass = answer.match(/\$+@\S+\.\S+/);
            //     if (pass) {
            //         return true;
            //     }
            //     return "Please enter a valid email address.";
            // }
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
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        intern.special = answers.internSchool
        teamMembers.push(intern);
        // idArray.push(answers.internId);
        return createTeam();
    })

    

}
createManager();

}
appMenu();