const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'logo-text',
        message: 'Enter logo text (MAXIMUM OF 3 CHARACTERS)',
    },

    {
        type: 'input',
        name: 'logo-color',
        message: 'Enter logo color (may be a color keyword or hexidecimal number)',
    },

    {
        type: 'checkbox',
        name: 'logo-shape',
        message: 'Select logo shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
];

class CLI {
    init() {
        inquirer.prompt(questions)
            .then((responses =>
                console.log(responses))
            );
    };
};

module.exports = CLI;