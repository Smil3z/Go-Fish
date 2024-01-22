const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('editing details');
        const id = req.params.id;

        if (id) {
            // If ID is provided, update existing fish
            const updateFishQuery = `
                UPDATE "fishes"
                SET "name" = $1, "location" = $2, "image_url" = $3, "description" = $4, "caught_at" = $5, "length" = $6, "weight" = $7
                WHERE "user_id" = $8 AND "id" = $9
            `;
            const updateFishValues = [
                req.body.name,
                req.body.location,
                req.body.imageUrl,
                req.body.description,
                req.body.caughtAt,
                req.body.length,
                req.body.weight,
                req.user.id,
                req.body.id
            ];

            pool.query(updateFishQuery, updateFishValues)
                .then((result) => {
                    console.log('PUT route successfull')
                    res.sendStatus(201)
                })
                .catch((error) => {
                    console.error('Error in editing router', error);
                    res.sendStatus(500);
                });
        }
    } else {
        // User is not authenticated
        console.error('unauthorized',error)
        res.sendStatus(401); // Unauthorized
    }
});

module.exports = router;
