// IMPORT EXPRESS
const express = require('express');
const router = express.Router();

// IMPORT burger
const burger = require('../models/burger');


// GET
router.get(async (req, res) => {
    const burgers = await burger.all();
    res.render('index', { burgers });
})


// POST
router.post(async (req, res) => {
    const newBurger = await burger.create([req.body.burger_name]);
    res.json({ id: newBurger.insertId });
})



// PUT
router.put('/api/burgers/:id', (req, res) => {
  //update one burger so grab id
  burger.updateOne(req.params.id, (result) => {
    res.json(result);
  });
});


module.exports = router;


/* TODO:
- Work on the handlebars for main, index, and partials
- Complete server.js
- public folder --> burgers.js
- Go over the controller.js
- models folder --> burger.js for burger object*/
