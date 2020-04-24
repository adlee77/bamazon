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
            connection.query(`SELECT * FROM products WHERE id = ?`, [answer.idNumber], ()=>{
                if (answer.units <= 'stock_quantity')
                    console.log('Ok we got your order')
                   // stock_quantity - answer.units
                    console.log(`You are purchasing ${product_name}, id:${answer.idNumber} for '$'${answer.units * price}`);
                else {
                    console.log('Insufficient quantity')
                }
            })
        })
}
start();


