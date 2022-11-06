const { createPromptModule } = require("inquirer");

const generateTeam = team => {
    const generateManager = Manager => {
        return `
            <div class="card employee-card">
            <div class="card-header">
                    <h2 class="card-title"> ${manager.getName()} </h2>
                    <h3 class="card-title"> <i class="fas fa-mug-hot-mr-2"> <//i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"> ID: ${manager.getId()}</li>
                        <li class="list-group-item"? Email: <a href="mailto: ${manager.getEmail()}</a></li>
                        <li class="list-group-item"> Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                <div>
            <div>    
    `;
    }

const generateEmployee = employee => {
    return `
    <div class="card employee-card">
    <div class="card-header">
            <h2 class="card-title"> ${employee.getName()} </h2>
            <h3 class="card-title"> <i class="fas fa-mug-hot-mr-2"> <//i> ${employee.getRole()}</h3>
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${employee.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${employee.getEmail()}</a></li>
            </ul>
        <div>
    <div>  
    `;
}

const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
            <h2 class="card-title"> ${engineer.getName()} </h2>
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${engineer.getEmail()}</a></li>
                <li class="list-group-item"> Office number: ${engineer.getGithub()}</li>
            </ul>
        <div>
    <div> 
    `;
}

const generateIntern = intern => {
    return `
    
    `;
}
}

//export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head> <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>My Team</title>

    <link rel="stylesheet" href="https:stack.path.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-gg0yr0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="stylestyle.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <dive class="row">
            <div class="team-area col-12 d-flex justify-content-center"> ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
`
}