const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project? (Required)",
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log("Please enter the name of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a short description of your project. (Required)",
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log("Please include a short description of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "What does a user need installed in order to run this file?"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions on how to use this README generator."
        },
        {
            type: "input",
            name: "tests",
            message: "Provide testing procedures."
        },
        {
            type: "input",
            name: "contributions",
            message: "List contributors"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Add a license to your project from the list below.",
            choices: ['Apache-2.0', 'MIT', 'Eclipse Public License', 'none'],
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username. (Required)",
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your e-mail address."
        },
    ])
        .then((readMeData) => {
            return readMeData;
        })
        .catch((error) => {
            console.log(error);
        })
};

questions()
    .then(readMeData => {
        return writeToFile("README.md", generateMarkdown(readMeData));
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    })
};
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();