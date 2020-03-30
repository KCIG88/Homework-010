const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer")
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const confirm = [
    {
        message: "Add and employee?",
        type: "confirm",
        name: "confirm",
    }
]
​const Engineer = (data) => {
    console.log(data)

}
const employees = []
const questions = [
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",

    },
    {
        type: "input",
        name: "id",
        message: "What is your id?",
        
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }
]
//engineerQuestion
const engineerQ = [
    {
        type: "input",
        name: "github",
        message: "What is your github",
    }
]
const internQ = [
    {
type: "input", 
name: "school",
message: "WHat school did you go to?"

}
]
const managerQ = [
    {
        type: "input",
        name: "officeNumber",
        message: "Office Number" 

    }
]
const engineer = async (data) =>{
    const res = await inquirer.prompt(engineerQ)
    const e = new Engineer(data.name, data.id, data.email, res.github)
    employees.push(e)
    console.log(employees)
    init()
}
 
const manager = async (data) =>{
    const res = await inquirer.prompt(managerQ)
    const e = new Manager(data.name, data.id, data.email, res.officeNumber)
    employees.push(e)
    console.log(employees)
    init()
}

const intern = async (data) =>{
    const res = await inquirer.prompt(engineerQ)
    const e = new Intern(data.name, data.id, data.email, res.school)
    employees.push(e)
    console.log(employees)
    init()
}

const exit = async (data) =>{
render (employees)
}

const init = async () => {
const choice = await inquirer.prompt(confirm)
if (choice.confirm){
    console.log(res)

    const res = await inquirer.prompt(questions)
    switch(res.role){
        case "Manager":
            
             return manager(res)
            case "Engineer":
                return engineer(res)
                 case "Intern":
                     return intern(res)
                     default:
                         console.log("Default")
                         break
    }
} else {
    exit(employees)
    console.log('Choice is false')
}
    console.log(res)
}

init()



















// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)
// ​
// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!
// ​
// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.
// ​
// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.
// ​
// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an 
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work!```
