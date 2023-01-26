import inquirer from 'inquirer';
import mysql from 'mysql2';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "list",
        name: "manager",
        message: "What is your managers name",
        choices: ["manager", "intern", "HR", "Developer"]
    }
  ])
  .then((answers) => {
    console.log("RESULT: ", answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });