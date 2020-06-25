// IMPORT EXPRESS
const express = require('express');
const router = express.Router();

// IMPORT burger
const burger = require('../models/burger');

// GET
router.get('/', async (req, res) => {
    const burgers = await burger.all();
    res.render('index', { burgers });
});

// POST
router.post('/api/burgers', async (req, res) => {
    const result = await burger.create([req.body.burger_name]);
    res.json({ id: result.insertId });
});

// PUT
router.put('/api/burgers/:id', async (req, res) => {
    const condition = 'id = ' + req.params.id;
    const results = await burger.update(condition);
    if (results.changedRows === 0) {
        return res.status(404).end();
    }
    res.status(200).end();
});

module.exports = router;