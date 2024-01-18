const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('POST ne fish:', req.body);
    
    if (req.isAuthenticated()) {
        const addFishQuery = `
            INSERT INTO "fishes" ("name", "location", "image_url", "description", "caught_at", "length", "weight", "user_id")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `;
        const addFishValues = [
            req.body.name,
            req.body.location,
            req.body.image_url,
            req.body.description,
            req.body.caught_at,
            req.body.length,
            req.body.weight,
            req.user.id
        ];

        pool.query(addFishQuery, addFishValues)
            .then((result) => {
                console.log('Added fish to database', result.rows[0].id);
                res.send(result.rows[0]);
            })
            .catch((error) => {
                console.error('Error in add route', error);
                res.sendStatus(500);
            });
    }
});
  







module.exports = router;