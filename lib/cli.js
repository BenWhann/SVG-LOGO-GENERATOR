const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateSVG = require('./generateSVG.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter logo text (MAXIMUM OF 3 CHARACTERS)',
    },

    {
        type: 'input',
        name: 'color',
        message: 'Enter logo color (may be a color keyword or hexidecimal number)',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Select logo shape',
        choices: ['circle', 'triangle', 'square'],
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

class CLI {
    init() {
        inquirer.prompt(questions)
            .then((responses => {
                console.log(responses)
                writeToFile('./examples/test.svg', generateSVG({ ...responses }));
            }));
}};



module.exports = CLI;