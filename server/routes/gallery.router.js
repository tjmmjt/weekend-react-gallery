const express = require('express');
const pool = require('../modules/pool.js') 
const router = express.Router();

// PUT /gallery/like/:id
router.put('like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // declare queryText which will SELECT all from database to return to DOM
  const queryText = `SELECT * FROM gallery;`
  // send query w/ pool
  pool
    .query(queryText)
  // THEN res.send result back to client in result.rows
    .then((result) => {
      console.log("Result:", result);
      res.send(result.rows)
    })
    .catch((err) => {
      alert('Error getting gallery:', err)
      res.sendStatus(500)
    })
});

module.exports = router;
