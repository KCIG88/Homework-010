const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
//const employees = []

const questions = [
    {
        type: "list",
        message: "What is your role ",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
    },
    {
        type: "input",
        message: "What is your name ",
        name: "name",
    },
    { 
    type: "input",
    message: "What is your id",
    name: "id",
},
{
    type: "input",
    message: "What is your email",
    name: "email",
},

{
    type: "confirm",
    message: "add another employee",
    name: "confirm",

}
]
// const engineer = [
// {
//     type: "input",
//     message: "Github",
//     name: "github",
// }
// ]
// const intern = [
//     {
//     type: "input",
//     messgae: "What is your office #?",
//     name: "office",
//     }
// ]
// const manager = [
//     {
// type: "input",
// message: "",
// name: "",
//     }
// ]
    
// const employee = () => {

// }

// const handleRoles = async () => {
//     switch(role){
//         case("engineer"):
//         return await inquirer.prompt(engineer)
//         case("intern"):
//         return await inquirer.prompt(intern)
//         default:
//             return console.log()
// }



​const init = async () => {
  
    try {
    const res =  inquirer.prompt(questions)
//     if (res.confirm){
//         console.log("confirm true")
//         init()
//     } else {
//         employees.push(res)
//         console.log(employees)
//         console.log("something happens")
//     }
} catch (error){
        console.error(error)
//     }
//     console.log(employees)
// }
console.log(questions)
}}

init()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
