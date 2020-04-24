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
            name: "options",
            type: "list",
            message: "What is the ID number of the product you would like?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ])
        .then(function(answer) {
            if (answer.options = "View Products for Sale") {
                connection.query(`SELECT * FROM products`, (err, res) => {
                    if (err) throw err;
                    console.log(res)
                    connection.end()
                })
            }
            else if (answer.options = "View Low Inventory") {
                connection.query(`SELECT * FROM products WHERE stock_quantity < 5`, (err, res) =>{
                    if (err) throw err;
                    console.log(res)
                    connection.end()
                })
            }
            else if (answer.options = "Add to Inventory") {
                addInventory()
            }
            else if (answer.options = "Add New Product") {
                addProducts()
            }
        })
}
function addProducts() {
    inquirer 
    .prompt([
        {
            name: "item",
            type: "input",
            message: "What item do you want to add?",
        },
        {
            name: "department",
            type: "input",
            message: "What department is this in?",
        },
        {
            name: "price",
            type: "number",
            message: "How much is it?",
        },
        {
            name: "stock",
            type: "number",
            message: "How many do we have?"
        }
    ])
    .then(function(answer){
        connection.query(`INSERT INTO products SET ?`, [{product_name: answer.item, department_name: answer.department, 
            price: answer.price, stock_quantity: answer.stock}], () => {
                console.log(`Ok, we got your ${answer.item} in ${answer.department} for '$'${answer.price} with a quantity of ${answer.stock}`)
            })
    })
}

function addInventory() {
    let availableItems = connection.query(`SELECT * FROM products`, (err, res) => {
        return res
    })
    inquirer
    .prompt ([
        {
            name: 'item',
            type: 'list',
            message: 'What item would you like to add more inventory to?',
            choices: [availableItems]
        },
        {
            name: 'num',
            type: 'number',
            message: 'How much would you like to add?'
        }
    .then(function(answer) {
        connection.query(`SELECT * FROM products WHERE product_name = answer.item`, (err, res) => {
            res.stock_quantity + answer.num 
            console.log(`Ok, we added ${answer.num} ${answer.item}s`)
        })
    })
])
}