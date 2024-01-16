const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// TODO: Route for list of details data


router.get('/:id', (req, res) => {
    console.log('GET /api/details');
    pool.query('SELECT * from "fishes" WHERE "id" = $1 ;', [req.params.id]).then((result) => {
        res.send(result.rows[0]);
    }).catch((error) => {
        console.log('Error GET /api/details', error)
        res.sendStatus(500);
    });
  });
router.post('/', (req, res) => {
    // POST route code here

    {/*console.log('POST api/details', req.body);
    const addFishQuery = `
    INSERT INTO "fishes" ("name", "location", "image_url", "description", "caught_at", "length", "weight")
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING "id";`*/}
    if(req.isAuthenticated()) {
        console.log(req.body);

        const insertFishQuery = `
            INSERT INTO "fishes" ("description","caught_at","length","weight") 
            VALUES ($1, $2, $3, $4);
        `;
        const insertFishValues = [
            req.body.description,
            req.body.caught_at,
            req.body.length,
            req.body.weight
        ]

        pool.query(insertFishQuery, insertFishValues )
            .then((result) => {
            console.log('added task to database', result.rows[0].id);
            res.send(result.rows[0]);
        }).catch((error) => {
            console.error('error in details router', error);
            res.sendStatus(500);
        })
    }
});

module.exports = router;