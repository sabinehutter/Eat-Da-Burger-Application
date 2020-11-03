var connection = require("../config/connection")

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput +  ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    }, 
    insertOne: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput +  ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput +  ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;