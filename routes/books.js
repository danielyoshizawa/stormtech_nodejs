var express = require('express');
var router = express.Router();

var sortBooks = function (books, field, sort) {
    var control = 1;

    if (sort == "desc") {
        control = -1;
    }

    books.sort(function(book1, book2) {
        if(book1[field] < book2[field]) return -control;
        if(book1[field] > book2[field]) return control;
        return 0;
    });

    return books;
};

var validateBooksList = function(res, books) {
    if (books == null) {
        res.status(500).send("Sorting Service Exception");
        return false;
    }  else {
        return true;
    }
};

router.post('/sort', function(req, res, next) {

    if(!validateBooksList(res,req.body.books)) {
        return;
    }

    var books = req.body.books;
    var queryFields = Object.keys(req.query);

    for (var i = queryFields.length - 1; i >= 0; i--) {
        books = sortBooks(books, queryFields[i], req.query[queryFields[i]] == "desc" ? "desc" : "asc");
    }

    res.send(books);
});

router.post('/sortByTitle', function(req, res, next) {

    if(!validateBooksList(res,req.body.books)) {
        return;
    }

    res.send(sortBooks(req.body.books, "title", req.query.sort == "desc" ? "desc" : "asc"));
});

router.post('/sortByAuthor', function(req, res, next) {

    if(!validateBooksList(res,req.body.books)) {
        return;
    }

    res.send(sortBooks(req.body.books, "author", req.params.sort == "desc" ? "desc" : "asc"));
});

module.exports = router;
