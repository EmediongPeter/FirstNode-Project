const {Description} = require('../models/model.model');

// const { products } = require('../../node-express-course/02-express-tutorial/data')
const { products } = require('../../../node-express-course/02-express-tutorial/data')

const getDescription = async(req, res)=> {
    const names = await Description.find();
    res.status(200).json({
        message: 'success',
        data: names
    })
}

const getProducts = async(req, res) => {
    // const productValues = await products.find()
    res.status(200).json({
        message: 'From control JS',
        products: products
    })
}

const createDescription = async(req, res) => {
    const body = req.body;

    const newDescription = await new Description({
        ...body
    })

    let error = newDescription.validateSync();
    if(error){
        res.status(400).json({ success: false, message: 'not a valid entry'});
    }

    newDescription.save();
    res.status(201).json({ success: true, data: newDescription})
}

const updateDescription = async(req, res) => {
    const { id } = req.params;
    const body = req.body;

    const newDescription = await Description.findByIdAndUpdate({_id: id}, body, {runValidators: true}).catch( error => {
        console.log(error);
    })

    res.status(200).json({ success: true, data: newDescription })
}
    
// const deleteDescription = async(req, res)=> {
//     const {id } = req.params;
//     const body = req.body;

//     await Description.findByIdAndDelete(
//         {_id: id}, 
//         body, 
//         {runValidators: true},
//     )
//         .catch(err=>{console.log(err)})
// }
const deleteDescription = async(req, res) => {
    const { id } = req.params;
    
    await Description.findByIdAndDelete({_id: id}).catch(error => {
        console.log(error)
    })

    res.status(200).json({process: true, info: 'deleted successfully'});
}

module.exports = {
    getDescription,
    getProducts,
    createDescription,
    updateDescription,
    deleteDescription
}