/**
 * Created by ovb5 on 29.09.2014.
 */
var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
    var db = req.db;
    var moneys = db.get('money');
    moneys.find({},{},function(e,docs){
        res.send(docs);
    });
});

router.post('/accept/:id', function(req, res) {
    var id = req.params.id;
    var db = req.db;
    var moneys = db.get('money');
    moneys.findOne({_id:id},{},function(e,doc){
        doc.accepted = true;
        doc.acceptDate = new Date();
        doc.acceptValue = req.body.value;
        moneys.update(doc);
    });
    res.end();
});

router.get('/incoming', function(req, res) {
    var db = req.db;
    var moneys = db.get('money');
    moneys.find({type:"income"},{},function(e,docs){
        res.send(docs);
    });
});

router.get('/consumption', function(req, res) {
    var db = req.db;
    var collection = db.get('money');
    collection.find({type:"consumption"},{},function(e,docs){
        res.send(docs);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id,
        db = req.db,
        moneys = db.get('money');
    moneys.findOne({_id:id},{},function(e,doc){
        res.send(doc);
    });
});

router.post('/', function(req, res) {
    var db = req.db;
    var moneys = db.get('money');
    moneys.insert(req.body);
    res.end();
});

router.get('/consumption-categories', function(req, res) {
    var db = req.db;
    var moneys = db.get('consumption-categories');
    moneys.find({},{},function(e,docs){
        res.send(docs);
    });
});

router.get('/income-sources', function(req, res) {
    var db = req.db;
    var moneys = db.get('income-sources');
    moneys.find({},{},function(e,docs){
        res.send(docs);
    });
});


module.exports = router;