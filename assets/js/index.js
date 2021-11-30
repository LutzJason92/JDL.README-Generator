const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([])

  .then((responses) => {
    // take response and write to new file
    // args - arg1 what file? arg2 what data?
    fs.writeFile("README.md", createREAD(responses), (err) => {
      err ? console.error(err) : console.log("file was writen");
    });
  });
