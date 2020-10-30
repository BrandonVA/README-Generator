// Object containing the badges for 5 commonly used Licenses.
const licenseBadges = {
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
}

const generateReadMe = (inquirerObj) => {
    // Destructuring the object incoming from the inquirer prompt.
    const { title, description, installInstructions, usageInfo, email, github, contribution, license, test } = inquirerObj;
    // Creating a README template to use for a blue print than adding in the data from inquirer.
    let readMeTemplate =
`# ${title}
${licenseBadges[license]}

## Description 

${description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)

## Installation 
${installInstructions}


## Usage 

${usageInfo}


## Contributing 

${contribution}

-Contact me by email: ${email} <br>
-Contact me by github: [${github}](https://github.com/${github})

## Tests 
${test}



## License 
This project has a ${licenseBadges[license]} license.
`;
    // Returning the newly built README template filled in with the data from the inquirer prompt.
    return readMeTemplate;
}


module.exports = {
    createReadMe: generateReadMe,
}