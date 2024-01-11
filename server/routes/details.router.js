const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// TODO: Route for list of details data

router.post('/', (req, res) => {
    // POST route code here
    console.log('POST api/details', req.body);
    const addFishQuery = `
    INSERT INTO "fishes" ("name", "location", "image_url", "description", "caught_at", "length", "weight")
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING "id";`

    pool.query(addFishQuery, 
        [req.body.name, 
        req.body.location, 
        req.body.image_url, 
        req.body.description, 
        req.body.caught_at, 
        req.body.length, 
        req.body.weight
    ]).catch(error => {
        console.log('error in DETAILS ROUTER', error);
        res.sendStatus(500)
    })
  });

  module.exports = router;