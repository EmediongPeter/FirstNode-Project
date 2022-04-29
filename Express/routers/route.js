const express = require('express');
const route = express.Router()

const {
    getDescription,
    getProducts,
    createDescription,
    updateDescription,
    deleteDescription
} = require('../controllers/control')

route.route('/').get(getDescription)
route.route('/product').get(getProducts)
route.route('/').post(createDescription)
route.route('/:id').put(updateDescription)
route.route('/:id').delete(deleteDescription) 

module.exports = route