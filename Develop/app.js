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
        choices: ["Manager", "Engineer", "Intern"],
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
const engineer = async (data) => {
    const res = await inquirer.prompt(engineerQ)
    const e = new Engineer(data.name, data.id, data.email, res.github)
    employees.push(e)
    console.log(employees)
    init()
}
 
const manager = async (data) => {
    const res = await inquirer.prompt(managerQ)
    const e = new Manager(data.name, data.id, data.email, res.officeNumber)
    employees.push(e)
    console.log(employees)
    init()
}

const intern = async (data) => {
    const res = await inquirer.prompt(internQ)
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
console.log(choice)
if (choice.confirm) {
    const res = await inquirer.prompt(questions)   
    switch (res.role) {
        case "Manager":           
             return manager(res)
            case "Engineer":
                return engineer(res)
                 case "Intern":
                     return intern(res)
                     default:
                         console.log("Default")
                         break;
    }
} else {
    
    }
}
init()