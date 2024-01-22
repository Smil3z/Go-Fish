const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.delete('/:id', (req, res) => {
    if(req.isAuthenticated()) {
      console.log('deleting fish');
      let queryText = `DELETE FROM "fishes" WHERE "id" = $1 AND "user_id" = $2;`;
      pool.query(queryText, [req.params.id, req.user.id])
      .then((result) => {
          res.sendStatus(201)
      }).catch((err) => {
          console.error('error in delete route', err)
          res.sendStatus(500)
      })} else {
        res.sendStatus(401);
      }
})

module.exports = router;