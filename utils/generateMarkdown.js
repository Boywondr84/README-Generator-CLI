// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == license) {
    return `[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]`;
} else {
  return "";
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'none') {
    return "";
  } else {
    return 
    `href="https://opensource.org/licenses/${data.license}"`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `* [License Link](#license-link)`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  // renderLicenseBadge, renderLicenseLink, renderLicenseSection
  // console.log(data.installation);

  return `
  # Title
  ${data.title}

  # License Link
  (https://opensource.org/licenses/${data.license})


  # Description
  ${data.description}

  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}
  
  # License
  ${data.license}
  (https://img.shields.io/badge/License-${data.license}-blue.svg)

  # Contributions
  ${data.contributions}
  
  # Tests
  ${data.tests}
  
  # Questions
  Have a question? Contact me on GitHub at a.href = "https://github.com/${data.github}" or by e-mail at ${data.email}.
  `;
};


module.exports = generateMarkdown;
