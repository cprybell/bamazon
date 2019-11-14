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
