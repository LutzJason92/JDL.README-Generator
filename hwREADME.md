# JDL.README-Generator

A application that generates a README.md file based on User Inputs.

### 09 Node.js Homework: Professional README Generator

## Your Task

```
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. Review the Professional README Guide as a reminder of everything that a high-quality, professional README should contain.

The application will be invoked by using the following command:

node index.js

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video and add it to the README of your project.
```

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
[x] THEN a high-quality, professional README.md is generated with the
[x]title of my project
and sections entitled
[x]Description,
[x]Table of Contents,
[x]Installation,(set-up)
[x]Usage,
[x]License,
[x]Contributing,
[x]Tests, and
[x]Questions
WHEN I enter my project title
[x] THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
[x] THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
[x] THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
[x] THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
[x] THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
[x] THEN I am taken to the corresponding section of the README
```

# README Generator

?License=mit&logo=appveyor

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Demonstration](#demonstration)
- [Setup](#setup)
- [Usage](#usage)
- [Project Updates](#project-updates)
- [Project Status](#project-status)
- [Have any Questions](#questions)
- [License](#license)

## Project Status

#### The status of Project README Generator is currently:

- ##### _in progress_

#### Why is is the status of the Project _in progress_:

- ##### Still working on badge generation

## Project Updates

Fix the badge generation

## Demonstration

![Screenshot of deployed Application](assets/images/App-Screensshot.png)

Live demo [_here_](assets/images/READMEGenerator.gif).

## Description

- A node.js driven file generator that creates a RREADME.md file.

## Technologies Used

- node.js inquirer, fs

## Setup

To use this application, you must have the following technologies installed:

- node.js inquirer and fs npm

## Usage

- The user launches in the Terminal node index.js to launch a series of prompts. Upon completion a file will be written.

## Questions

This application was created by: [Jason Lutz](mailto:LutzJason92@gmail.com)

- I encourage you to send me an email if you have any questions or comments.

## Contributors

Thank you to these GitHub users for thier contributions:

- https://github.com/LutzJason92

## License

- This appplication is currently using a mit license.
