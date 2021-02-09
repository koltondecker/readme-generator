// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "What is your project description?",
    "What are the installation instructions?",
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "Please select the license for your project.",
    "What's your github username?",
    "What is your email?"
];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile("README.md", data, () => {
        console.log("File written successfully!");
    });

}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: questions[0]
    },
    {
        type: "input",
        name: "description",
        message: questions[1]
    },
    {
        type: "input",
        name: "installationInstructions",
        message: questions[2]
    },
    {
        type: "input",
        name: "usageInformation",
        message: questions[3]
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: questions[4]
    },
    {
        type: "input",
        name: "testInstructions",
        message: questions[5]
    },
    {
        type: "list",
        name: "license",
        message: questions[6],
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
            "none"
        ]
    },
    {
        type: "input",
        name: "username",
        message: questions[7]
    },
    {
        type: "input",
        name: "email",
        message: questions[8]
    },
]).then( (answers) => {

    let markdown = generateMarkdown(answers);
    writeToFile(markdown);

});

}

// Function call to initialize app
init();
