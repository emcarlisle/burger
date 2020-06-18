// IMPORT EXPRESS
const express = require('express');
const router = express.Router();
// IMPORT burger
const burger = require('../models/burger');
// GET
router.get('/', (req, res) => {
    burger.selectAll(
        (data) => {
            let bgObject = {
                burgers: data
            };
            // render
            res.render('index', bgObject);
        }
    )
})


// POST 
router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        req.body.name
    ], (result) => {
            res.json(result);
    })
})

// PUT
router.put('api/burgers/:id', (req, res) => {
    //update one burger so grab id
    burger.updateOne(req.params.id, (result) => {
        res.json(result);
    }) 
})
