var Page = require('../models/Page');

exports.index = function(req, res, next){
    Page.find(function(err, docs) {
        if (err) return next(err);
        res.json(docs);
    });
};

exports.show = function(req, res, next){
    res.send(req.page);
};

exports.create = function(req, res, next){
    var page = new Page();
    page.title = req.body.title;
    page.url = req.body.title; //todo
    page.content = req.body.content;
    page.save(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};

exports.update = function(req, res, next){
    req.page.title = req.body.title;
    req.page.content = req.body.content;
    req.page.save(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};

exports.destroy = function(req, res, next){
    req.page.remove(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};