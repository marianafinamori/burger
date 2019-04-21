// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  

  insertOne: function(burger_name) {
    orm.insertOne(burger_name);
  },
  
  updateOne: function(condition) {
    orm.updateOne(condition)
  
  },
  delete: function(condition, cb) {
    orm.delete(condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
