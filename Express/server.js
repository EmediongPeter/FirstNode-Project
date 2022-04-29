const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const mongoose = require('mongoose')

const db = mongoose;

const FTNames = require('./routers/route')

const { products } = require('../../node-express-course/02-express-tutorial/data')
console.log(products);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', FTNames)

const connectionString = `mongodb://localhost:27017/first-project`

db.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected successfully"))
    .catch(error => console.log(error))


// the routes

app.get('/products', (req, res) => {
    res.status(200).json({data: products})
})

app.listen(5000, () => {
    console.log('Server is listening on port ==> https://localhost:3000');
})