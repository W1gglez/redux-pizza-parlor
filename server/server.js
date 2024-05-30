const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const pizzaRouter = require('./routes/pizza.router.js');
app.use('/api/pizza', pizzaRouter);

const orderRouter = require('./routes/order.router.js');
app.use('/api/order', orderRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});