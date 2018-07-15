let express = require('express');
let Bordel = require('../models/bordel');

let router = express.Router();

router.get('/', function (req, res) {
    Bordel.find({}, function (err, doc) {
        if (err) {
            res.sendStatus(400);
        } else {
            res.json(doc);
        }
    });
    router.get('/:id', function (req, res) {
        Bordel.findById(req.params.id, function (err, doc) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.json(doc);
            }
        })
    });

    router.post('/', function (req, res) {
        Bordel.create(req.body, function (err, doc) {
            if (err) {
                res.sendStatus(400);
            } else {
                res.json(doc);
            }
        });
    });

    router.delete('/:id', function (req, res) {
        Bordel.findByIdAndRemove(req.params.id, function (err, doc) {
            if (err) {
                res.sendStatus(400);
            } else {
                res.json(doc)
            }
        });
    });

    router.put('/:id', function (req, res) {
        Bordel.findByIdAndUpdate(req.params.id,
            req.body,
            {new: true},
            function (err, doc) {
                if (err) {
                    res.sendStatus(400);
                } else {
                    res.json(doc);
                }
            });
    });
});

module.exports = router;