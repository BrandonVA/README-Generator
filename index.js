const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./createReadme');

// const { title, description, installInstructions, usageInfo, email, github, contribution, license, test  } = inquirerObj;
inquirer
    .prompt([{
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a breif description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps to install your project?",
        name: "installInstructions"
    },
    {
        type: "input",
        message: "Directions on how to use your project.",
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
        type: "list",
        message: "What type of license do you want to use?",
        choices: [
            'ISC',
            'MIT',
            'GNU',
            'Apache 2',
            'BSD 3',
        ],
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