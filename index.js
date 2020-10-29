const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./createReadme');

// const { title, description, installInstructions, usageInfo, email, github, contribution, license, test  } = inquirerObj;
inquirer
    .prompt([{
        type: "input",
        message: "What is your name?",
        name: "title"
    },
    {
        type: "input",
        message: "Where are you located?",
        name: "description"
    },
    {
        type: "input",
        message: "How to install.",
        name: "installInstructions"
    },
    {
        type: "input",
        message: "Directions on how to use.",
        name: "usageInfo"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: 'input',
        message: 'Whats your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'How to contribute.',
        name: 'contribution'
    },
    {
        type: "checkbox",
        message: "What type of license do you want to use?",
        choices: ["lic1", "lic2", "lic3"],
        name: "license"
    }
    ])
    .then(response => {


        const readMeTemplate = generate.createReadMe(response);

        fs.writeFile("README.md", readMeTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        })
    });