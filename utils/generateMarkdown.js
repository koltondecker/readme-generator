// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === "none") {
    return "";
  }
  else {
    license = license.replace(/\s/g , "_");
    return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const licenseArray = [
    {
      name: "GNU AGPLv3",
      link: "https://www.gnu.org/licenses/agpl-3.0"
    },
    {
      name: "GNU GPLv3",
      link: "https://www.gnu.org/licenses/gpl-3.0"
    },
    {
      name: "GNU LGPLv3",
      link: "https://www.gnu.org/licenses/lgpl-3.0"
    },
    {
      name: "Mozilla Public License 2.0",
      link: "https://opensource.org/licenses/MPL-2.0"
    },
    {
      name: "Apache License 2.0",
      link: "https://opensource.org/licenses/Apache-2.0"
    },
    {
      name: "MIT License",
      link: "https://opensource.org/licenses/MIT"
    },
    {
      name: "Boost Software License 1.0",
      link: "https://www.boost.org/LICENSE_1_0.txt"
    },
    {
      name: "The UNLicense",
      link: "http://unlicense.org/"
    }
  ]

  if(license === "none") {
    return "";
  }
  else {

    let licenseLink = licenseArray.find(e => e.name === license)

    return licenseLink.link;

  };

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  if(license === "none") {
    return ""
  }
  else {
    return `${licenseBadge}\n
    <a href="${licenseLink}">${licenseLink}</a>
    `;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}
  ## Table of Contents: \n
    [Description](Link)
    [Installation Instructions](link)
    [Usage Information](link)
    [Contribution Guidelines](link)
    [Test Instructions](link)
    [Licensing](link)
    [Questions](link)
  ## Description: \n
  ${data.description} \n
  <hr>\n
  ## Installation Instructions: \n
  ${data.installationInstructions}\n
  <hr>\n
  ## Usage Information: \n
  ${data.usageInformation}\n
  <hr>\n
  ## Contribution Guidelines: \n
  ${data.contributionGuidelines}\n
  <hr>\n
  ##Test Instructions: \n
  ${data.testInstructions}\n
  <hr>\n
  ### Licensing: \n
  ${licenseSection}\n
  <hr>\n
  ### Questions: \n
  ${data.username}\n
  ${data.email}\n
`;
}

module.exports = generateMarkdown;
