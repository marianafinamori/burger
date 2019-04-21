var connection = require("./connection.js");


var orm = {
	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers";

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},

	// Function that insert a single table entry
	insertOne: function(burger_name, cb) {
		// Construct the query string that inserts a single row into the target table
		var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

	
		connection.query(queryString, burger_name, function(err, result) {
			if (err) {
				throw err;
      }
      
			console.log(burger_name)
		});
	},

	
	updateOne: function(condition, cb) {
		// Construct the query string that updates a single entry in the target table
		var queryString = "UPDATE burgers SET devoured=true WHERE " + condition;


		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			console.log("the burger " + condition + "was devoured")
			// cb(result);
		});
  },
  
  delete: function(condition, cb) {
    var queryString = "DELETE FROM burgers WHERE " + condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
