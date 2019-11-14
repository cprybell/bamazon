ALTER USER 'root'@'localhost' IDENTIFIED WITH
	mysql_native_password BY 'a-6Intruder';


DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (item_id)
);

USE bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apples", "Produce", 1.05, 25), ("Coca Cola", "Beverages", 2.54, 12), ("White Claws", "Alcohol", 17.33, 1),
("Light Bulbs", "Home Improvement", 10.21, 9), ("Ground Beef", "Butcher", 8.09, 33), ("Old Spice Body Wash", "Bathroom", 3.01, 12),
("Bananas", "Produce", 0.10, 104), ("Nugo Bars", "Sports Bars", 1.25, 17), ("Jack Daniels", "Alcohol", 46.73, 23),
("Pepsi", "Beverages", 2.21, 21);