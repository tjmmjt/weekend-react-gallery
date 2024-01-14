const express = require('express');
const pool = require('../modules/pool.js') 
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // declare queryText which will UPDATE likes by id by +1
  const queryParams = req.params.id
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE id=$1`

  pool
    .query(queryText, [queryParams])
  .then((result) => {
    console.log("Update Successful");
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log("Error Updating:", err);
    res.sendStatus(500)
  })

});

// GET /gallery
router.get('/', (req, res) => {
  // declare queryText which will SELECT all from database to return to DOM
  const queryText = `SELECT * FROM gallery ORDER BY id;`
  
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
