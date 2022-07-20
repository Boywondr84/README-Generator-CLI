const inquirer = require("inquirer");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "* Title",
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
            name: "** Description",
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
            type: "checkbox",
            name: "** Table of Contents",
            message: "Select from the list which sections to be added.",
            choices: ['Installation', 'Usage', 'Tests', 'Contributions']
        },
        {
            type: "checkbox",
            name: "** License",
            message: "Add a license to your project from the list below.",
            choices: ['Apache License 2.0', 'MIT License', 'BSD 2-Clause License', 'GNU General Public License', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: "input",
            name: "GitHub username",
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
        {
            type: "input",
            name: "** Questions",
            // add link to GitHub profile
            // add e-mail with instructions on how to contact
            message: "",
        }
    ])
        .then((answers) => {
            console.log(answers);
        })
        .catch((error) => {
            if (error) {
                return true;
            } else {

            }
        })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

questions();