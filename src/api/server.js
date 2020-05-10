const express = require('express')
const cors = require('cors');

const data = require('./books.json');
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post(
  '/api/books',
  async (req, res) => {

    //const product  = req.query.product.toUpperCase();
    res.status(200).json(data);
  }
)

app.listen(3001, () => console.log(`Listening at http://localhost:${3001}`))
