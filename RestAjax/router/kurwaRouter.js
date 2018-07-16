let express = require('express');
let Kurwa = require('../models/kurwa');

let router = express.Router();

router.get('/' , function (req, res) {
    Kurwa.find({}, function (err, doc) {
        if (err) {
            res.sendStatus(400);
        } else {
            res.json(doc);
        }
    });
});

router.get('/:id', function (req, res) {
    Kurwa.findById(req.params.id, function (err, doc) {
        if (err) {
            res.sendStatus(400);
        } else {
            res.json(doc);
        }
    });
});

router.post('/', function (req, res) {
    Kurwa.create(req.body, function (err, doc) {
        if (err) {
            res.sendStatus(400);
        } else {
            res.json(doc);
        }
    });
});

router.delete('/:id', function (req, res) {
    Kurwa.findByIdAndDelete(req.params.id, function (err, doc) {
        if (err) {
            res.sendStatus(400)
        } else {
            res.json(doc)
        }
    });
});

router.put('/:id', function (req, res) {
    Kurwa.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err, doc) {
        if (err) {
            res.sendStatus(400);
        } else {
            res.json(doc);
        }
    });
});


module.exports = router;