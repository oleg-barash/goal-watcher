/**
 * Created by ovb5 on 25.09.2014.
 */
var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
    var db = req.db;
    var collection = db.get('goals');
    collection.find({},{},function(e,docs){
        res.send(docs);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id,
        db = req.db,
        collection = db.get('goals');
    collection.find({_id:id},{},function(e,docs){
        res.send(docs);
    });
});

module.exports = router;
