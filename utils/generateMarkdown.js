/*
Stavros Panagiotopoulos (stavrpana)
SCS Boot Camp Module 9 Weekly Challenge - Professional README Generator
Created 10/01/2023
Last Edited 10/10/2023
*/

const fs = require('fs');
const inquirer = require('inquirer');

// Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === "Apache 2.0") {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === "GPL 3.0") {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else {
    return '';
  }
}

// Create a function that returns the license link

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === "Apache 2.0") {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "GPL 3.0") {
    return '[GPL 3.0 License](https://opensource.org/licenses/GPL-3.0)';
  } else {
    return '';
  }
}

// Create a function that returns the license section of README

// If there is no license, return an empty string

function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (licenseBadge && licenseLink) {
    return `## License
${licenseBadge}
This project is licensed under the ${licenseLink} license.`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README

function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
${licenseSection}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## Tests
${data.tests}
## Questions
If you have any questions, please feel free to contact me via email at ${data.email}.
You can also find my GitHub profile [here](https://github.com/${data.github}). 
  `;
}
module.exports = generateMarkdown;
