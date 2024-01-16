const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// TODO: Route for list of users data

router.get('/', (req, res) => {
  console.log('GET /api/journal');
  pool.query('SELECT * from "fishes" WHERE "user_id" = $1 ;', [req.user.id]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /api/journal', error)
      res.sendStatus(500);
  });
});


module.exports = router;