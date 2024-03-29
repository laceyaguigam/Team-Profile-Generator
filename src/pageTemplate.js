// const { createPromptModule } = require("inquirer");

const generateTeam = team => {
    const generateManager = manager => {
        return `
            <div class="card employee-card shadow">
            <div class="card-header bg-primary">
                    <h2 class="card-title text-white"> ${manager.getName()}  </h2>
                    <h3 class="card-title"> <i class="bi bi-cup-hot-fill"></i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item"> ID: ${manager.getId()}</li>
                        <li class="list-group-item"?> Email: <a href="mailto: ${manager.getEmail()}</a></li>
                        <li class="list-group-item"> Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                <div>
            <div>    
    `;
    }

const generateEmployee = employee => {
    return `
    <div class="card employee-card shadow">
    <div class="card-header bg-primary">
            <h2 class="card-title text-white"> ${employee.getName()} </h2>
            <h3 class="card-title text-white"> <i class="bi bi-cup-hot-fill"></i> ${employee.getRole()}</h3>
         </div>
         <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${employee.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${employee.getEmail()}</a></li>
                <li class="list-group-item"> Github: ${employee.getGithub()}</li>
            </ul>
        <div>
    <div>  
    `;
}

const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header bg-primary">
            <h2 class="card-title"> ${engineer.getName()} </h2>
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${engineer.getEmail()}</a></li>
                <li class="list-group-item"> Github: ${engineer.getGithub()}</li>
            </ul>
        <div>
    <div> 
    `;
}

const generateIntern = intern => {
    return `
    <div class="card employee-card shadow">
    <div class="card-header bg-primary">
            <h2 class="card-title text-white"> ${intern.getName()} </h2>
            <h3 class="card-title"> <i class="bi bi-mortarboard-fill"></i> </h3> 
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${intern.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${intern.getEmail()}</a></li>
                <li class="list-group-item"> School: ${intern.getSchool()}</li>
            </ul>
        <div>
    <div>
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

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css">
<script src="https://kit.fontawesome.com/c502137733.js"></script>



</head>

<body>

<div class="container-fluid align-items-center border-primarygit">


    <div class="container-fluid">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center"> ${generateTeam(team)}
            </div>
        </div>
    </div>
</div>
    
</body>
</html>
`
}


