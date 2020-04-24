var mysql = require("mysql")
var inquirer = require("inquirer")

let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
});

function start() {
    inquirer
        .prompt([
        {
            name: "idNumber",
            type: "input",
            message: "What is the ID number of the product you would like?",
        },
        {
            name: "units",
            type: "number",
            message: "How many units would you like to purchase?"
        }
    ])
        .then(function(answer) {
            console.log(answer)
        })
}
start();

