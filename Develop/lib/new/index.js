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
const questions = [
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

const init = async () => {
    const res = await inquirer.prompt(questions)
    console.log(res)
}

init()