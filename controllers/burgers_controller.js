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
        res.render("index", hbsObject)
    })
});

router.post("/burgers/create", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();}
        })
    });


module.exports = router