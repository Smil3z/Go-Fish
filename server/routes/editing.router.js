const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        if (id) {
            // If ID is provided, update existing fish
            const updateFishQuery = `
                UPDATE "fishes"
                SET "name" = $1, "location" = $2, "image_url" = $3, "description" = $4, "caught_at" = $5, "length" = $6, "weight" = $7
                WHERE "user_id" = $8
            `;
            const updateFishValues = [
                req.body.name,
                req.body.location,
                req.body.image_url,
                req.body.description,
                req.body.caught_at,
                req.body.length,
                req.body.weight,
                req.user.id
            ];

            pool.query(updateFishQuery, updateFishValues)
                .then((result) => {
                    if (result.rows.length > 0) {
                        console.log('Updated fish in database', result.rows[0].id);
                        res.send(result.rows[0]);
                    } else {
                        // No fish found with the given ID for the authenticated user
                        res.sendStatus(404);
                    }
                })
                .catch((error) => {
                    console.error('Error in update route', error);
                    res.sendStatus(500);
                });
        } else {
            // If no ID is provided, add a new fish
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
    } else {
        // User is not authenticated
        res.sendStatus(401); // Unauthorized
    }
});

module.exports = router;
