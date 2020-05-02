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
        .then(function (answer) {
            connection.query(`SELECT * FROM products WHERE id = ?`, [answer.idNumber], (err, res) => {
                if (err) throw err
                if (answer.units <= res[0].stock_quantity) {
                    console.log('Ok we got your order')
                    connection.query("UPDATE products SET stock_quantity = ? WHERE id = ?", [res[0].stock_quantity - answer.units, answer.idNumber], (err) => { if (err) throw err })
                    console.log(`You are purchasing ${res[0].product_name}, id:${answer.idNumber} for '$'${answer.units * res[0].price}`)}
                else {
                    console.log('Insufficient quantity')
                }
                connection.end()
            })
        })
}
start();


