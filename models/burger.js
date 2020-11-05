var orm  = require("../config/orm")

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",   function(res){

            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.create("burgers", [
          "burger_name", "devoured"
        ], [
          name, false
        ], cb);
      },
    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
          devoured: true
        }, condition, cb);
      }
};

module.exports = burger;