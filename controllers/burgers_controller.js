var express = require("express")

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger_data: data
        };
        console.log(hbsObject);
        res.render("index.html", hbsObject)
    })
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result) {
    
        console.log(result);
    
    })
})

module.exports = router