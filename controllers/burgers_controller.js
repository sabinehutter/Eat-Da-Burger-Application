var express = require("express")

var router = express.Router();

var burger = require("../config/orm")

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all("burgers", function (data) {
        res.render("index", {
            burger_data: data
        });
    })
});

router.post("/burgers/create", function (req, res) {

    console.log(req)
    burger.create("burgers", req.body.burger_name, function (result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update("burgers",req.params.id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    })
});


module.exports = router