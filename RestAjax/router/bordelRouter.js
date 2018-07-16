let express = require('express');
let Bordel = require('../models/bordel');
let Kurwa = require('../models/kurwa');


let router = express.Router();

router.get('/', function (req, res) {
    Bordel.find({}, function (err, doc) {
        if (err) {
            res.sendStatus(400);
        } else {
            res.json(doc);
        }
    });
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

router.put('/:bordelId/addKurwa/:kurwaId', function (req, res) {
    Bordel.findById(req.params.bordelId, function (err, bordel) {
        if (err) {
            
        } else {
            Kurwa.findById(req.params.kurwaId, function (err, kurwa) {
                if (err) {

                } else {
                    // З прийнятого борделю доступаюсь
                    // до масиву курв і пушу туді дівку яку найшов по ID
                    // kurwas це назва поля в моделі борделю
                    bordel.kurwas.push(kurwa);
                    // також даю дівці бордель.
                    kurwa.bordel = bordel;

                    // і зберігаю
                    bordel.save();
                    kurwa.save();

                    res.json(bordel);
                }
            })
        }
    })
    
});

module.exports = router;