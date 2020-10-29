const generateReadMe = (inquirerObj) => {
    const { title, description, installInstructions, usageInfo, email, github, contribution, license, test  } = inquirerObj;

    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    // WHEN I enter a description, installInstructions, usageInfo, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    let readMeTemplate = `
    
    # ${title}

    ## Description ${description}

    ## Table of Contents (Optional)

    If your README is very long, add a table of contents to make it easy for users to find what they need.

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)


    ## Installation ${installInstructions}

    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


    ## Usage ${usageInfo}

    Provide instructions and examples for use. Include screenshots as needed. 
    ${email}
    ${github}


    ## Credits 

    List your collaborators, if any, with links to their GitHub profiles.

    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

    If you followed tutorials, include links to those here as well.



    ## License ${license}

    The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


    ---

    🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

    ## Badges ${contribution}

    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

    Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


    ## Contributing ${contribution}

    add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

    ## Tests ${test}

    Go the extra mile and write tests for your application. Then provide examples on how to run them.
    `
    return readMeTemplate;
}
module.exports = {
    createReadMe = generateReadMe
}