const { TestScheduler } = require('jest');
const createReadme = require('./createReadme');

const testObj = {
    title: 'title',
    description: 'description',
    installInstructions: 'installInstructions',
    usageInfo: 'usageInfo',
    email: 'email',
    github: 'github',
    contribution: 'contribution',
    license: 'MIT',
    test: 'test'
}

const testTemplate = 
`# title
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

description


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#license)


## Installation 
installInstructions


## Usage 

usageInfo


## Contributing 

contribution

-Contact me by email: email <br>
-Contact me by github: [github](https://github.com/github)

## Tests 
test



## License 
This project has a [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) license.
`;

test('Creates a string that is a template of a README file.', () => {
    expect(createReadme.createReadMe(testObj)).toEqual(testTemplate)
})