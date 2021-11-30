const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your first and Last name?",
      name: "NAME",
    },
    {
      type: "input",
      message: "What is the Title of this Project",
      name: "TITLE",
    },
    {
      type: "input",
      message: "Write a Description of the Project. !DOUBLE CHECK FOR TYPOS!",
      name: "DESCRIPTION",
    },
    {
      type: "input",
      message:
        "What problem does this application intend to solve? !DOUBLE CHECK FOR TYPOS!",
      name: "SOLVES",
    },
    {
      type: "input",
      message:
        "What technologies were used to create this command line application?",
      name: "TECH",
    },
    {
      type: "input",
      message: "How does the user use this application?",
      name: "USAGE",
    },
    {
      type: "input",
      message:
        "Provide a relative path to an screenshot of the deployed Application",
      name: "SCREENSHOT",
    },
    {
      type: "input",
      message: "Provide a link to a GIF of the deployed Application",
      name: "APPGIF",
    },
    {
      type: "input",
      message: "What technologies are needed to use this application?",
      name: "SETUP",
    },
    {
      type: "list",
      message: "Select from this list the appropriate License for this Project",
      name: "LICENSE",
      choices: [
        "afl-3.0",
        "apache-2.0",
        "artistic-2.0",
        "bsl-1.0",
        "bsd-2-clause",
        "bsd-3-clause",
        "bsd-3-clause-clear",
        "cc",
        "cc0-1.0",
        "cc-by-4.0",
        "cc-by-sa-4.0",
        "wtfpl",
        "ecl-2.0",
        "epl-1.0",
        "epl-2.0",
        "eupl-1.1",
        "agpl-3.0",
        "gpl",
        "gpl-2.0",
        "gpl-3.0",
        "lgpl",
        "lgpl-2.1",
        "lgpl-3.0",
        "isc",
        "lppl-1.3c",
        "ms-pl",
        "mit",
        "mpl-2.0",
        "osl-3.0",
        "postgresql",
        "ofl-1.1",
        "ncsa",
        "unlicense",
        "zlib",
      ],
    },
    {
      type: "input",
      message: "Who Contributed to this porject? enter thier GitHub user Name:",
      name: "CONTRIBUTORS",
    },
    {
      type: "input",
      message: "What Testing has been executed on this project?",
      name: "TESTING",
    },
    {
      type: "list",
      message:
        "How should a user contact the developer if they have any questions?",
      name: "CONTACT",
      choices: ["LutzJason92@gmail.com", "Jason.Lutz@du.edu"],
    },
    {
      type: "input",
      message: "What updates or improvements are planned for future releases?",
      name: "UPDATES",
    },
    {
      type: "list",
      message: "What is the status of this project?",
      name: "STATUS",
      choices: ["_complete_", "_in progress_", "_no longer being worked on_"],
    },
    {
      type: "input",
      message:
        "Explain the reason behind your selection of the Project Status.",
      name: "WHYSTATUS",
    },
  ])

  .then((response) => {
    // take response and write to new file
    // args - arg1 what file? arg2 what data?
    fs.writeFile("README.md", createREADME(response), (err) => {
      err ? console.error(err) : console.log("file was writen");
    });
  });

function createREADME(response) {
  return `
  
  # ${response.TITLE}

?License=${response.LICENSE}&logo=appveyor

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Updates](#project-updates)
- [Project Status](#project-status)
- [Have any Questions](#questions)
- [License](#license)

## Project Status

#### The status of Project ${response.TITLE} is currently:

- ##### ${response.STATUS}

#### Why is is the status of the Project ${response.STATUS}:

- ##### ${response.WHYSTATUS}

## Project Updates

${response.UPDATES}

## Screenshots

![Screenshot of deployed Application](${response.SCREENSHOT})

Live demo [_here_](${response.APPGIF}).

## Description

- ${response.DESCRIPTION}

## Technologies Used

- ${response.TECH}

## Setup

To use this application, you must have the following technologies installed:

- ${response.SETUP}

## Usage

- ${response.USAGE}

## Questions

This application was created by: [${response.NAME}](mailto:${response.CONTACT})

- I encourage you to send me an email if you have any questions or comments. 

## Contributors

Thank you to these GitHub users for thier contributions:

- https://github.com/${response.CONTRIBUTORS}

## License

- This appplication is currently using a ${response.LICENSE} license.


  `;
}
