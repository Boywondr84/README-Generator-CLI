// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == license) {
    return `[License](https://img.shields.io/badge/License-${license}-blue.svg)(https://opensource.org/licenses/${license})`;
} else {
  return '';
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'none') {
    return '';
  } else {
    `* [License](#license)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == license) {
    `* [License](#license)`
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  // console.log(data.installation);

  return `
  # Title
  ${data.title}

  # Description
  ${data.description}

  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}
  
  # License
  ${data.license}
  
  # Contributions
  ${data.contributions}
  
  # Tests
  ${data.tests}
  
  # Questions
  Have a question? Contact me on GitHub at ${data.github} or by e-mail at ${data.email}.
  `;
};


module.exports = generateMarkdown;
