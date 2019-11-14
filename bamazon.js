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
        purchaseItem();
});

function purchaseItem() {
    inquirer.prompt({
        name : "itemId",
        message : "What is the ID of the item you would like to purchase?",
        type : "input"
    }).then(function(response) {
        var query = connection.query(
            "SELECT * FROM products WHERE?", 
        {
            item_id : response.itemId
        },
        function(err, res) {
            if (err) throw err;
            if(res.length > 0) {
                readElements(res);
                quantityCheck(res);
            }
            else {
                console.log("Sorry that is not a valid ID!")
            }
        })
        connection.end();
    });
}

function quantityCheck(item) {
    item = item[0];
    inquirer.prompt({
        name : "quantity",
        message : "How many " + item.product_name + " would you like to purchase?",
        type : "input"
    }).then(function(response) {
        if (item.stock_quantity >= response.quantity) {
            var updatedQuantity = item.stock_quantity - response.quantity;
            console.log(updatedQuantity);
            var query = connection.query(
                "UPDATE products SET stock_quantity =? WHERE item_id =?", 
            [
                updatedQuantity,
                item.item_id,
            ],
            function(err, res) {
                console.log("Your total purchase was $" + response.quantity * item.price);
            })
        }
        else {
            console.log("Sorry insufficient quantity!");
        }
    })
}

function readElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("ID :" + arr[i].item_id + " | Product Name: " + arr[i].product_name + " | Department: " + arr[i].department_name + " | Price: " 
        + arr[i].price + " | Stock Quantity: " + arr[i].stock_quantity );
    }
    console.log("-----------------------------------");

}

