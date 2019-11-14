var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "a-6Intruder",
    database: "bamazon"
  });

var query = connection.query(
    "SELECT * FROM products",
    function(err, res) {
        if (err) throw err;
        readElements(res);
});


function readElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("ID :" + arr[i].item_id + " | Product Name: " + arr[i].product_name + " | Department: " + arr[i].department_name + " | Price: " 
        + arr[i].price + " | Stock Quantity: " + arr[i].stock_quantity );
    }
    console.log("-----------------------------------");
    connection.end();
}

