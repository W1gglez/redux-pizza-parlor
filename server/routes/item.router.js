const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/item');
    pool.query(`
SELECT "line_item".order_id, "pizza".name, "line_item".pizza_id, "orders".customer_name, "orders".total, "orders".time
FROM "line_item"
INNER JOIN "pizza"
ON "line_item".pizza_id = "pizza".id
INNER JOIN "orders"
ON "line_item".order_id = "orders".id

;`).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/line-item', error)
        res.sendStatus(500);
    });
})

module.exports = router;