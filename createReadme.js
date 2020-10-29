const licenseBadges = {
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
}

const generateReadMe = (inquirerObj) => {
    const { title, description, installInstructions, usageInfo, email, github, contribution, license, test } = inquirerObj;

    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    // WHEN I enter a description, installInstructions, usageInfo, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    let readMeTemplate =
`# ${title}
${licenseBadges[license]}

## Description 
${description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation 
${installInstructions}


## Usage 

${usageInfo}

Include screenshots as needed. 


## Contributing 

${contribution}

-Contact me by email: ${email}
-Contact me by github:${github}

## Tests 
${test}

Go the extra mile and write tests for your application. Then provide examples on how to run them.


## License 
${licenseBadges[license]}
`;

    return readMeTemplate;
}
module.exports = {
    createReadMe: generateReadMe,
}