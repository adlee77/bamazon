ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR(100),
price FLOAT,
stock_quantity INTEGER,
PRIMARY KEY (id)
);

INSERT INTO products SET product_name = "brush", department_name = "cleaning", price = 10.99, stock_quantity=100;
INSERT INTO products SET product_name = "broom", department_name = "cleaning", price = 9.99, stock_quantity=100;
INSERT INTO products SET product_name = "toothbrush", department_name = "bath", price = 4.99, stock_quantity=100;
INSERT INTO products SET product_name = "floss", department_name = "bath", price = 1.99, stock_quantity=100;
INSERT INTO products SET product_name = "baseball", department_name = "sports", price = 6.99, stock_quantity=100;
INSERT INTO products SET product_name = "basketball", department_name = "sports", price = 25.99, stock_quantity=100;
INSERT INTO products SET product_name = "headphones", department_name = "electronics", price = 15.99, stock_quantity=100;
INSERT INTO products SET product_name = "phone", department_name = "electronics", price = 100, stock_quantity=100;
INSERT INTO products SET product_name = "tv", department_name = "electronics", price = 500, stock_quantity=100;
INSERT INTO products SET product_name = "hat", department_name = "apparel", price = 10.99, stock_quantity=100;

SELECT * FROM products;