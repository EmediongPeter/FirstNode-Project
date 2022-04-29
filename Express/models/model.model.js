const { model, Schema } = require('mongoose')

const Description = model(
    "Names of FutureLabs Students",
    new Schema({
        name: {type: String, required: [true, 'Enter a valid Name']},
        department: {type: String},
        field: {type: String},
        resumption: {type: Number, required:[true]}
    },
    {
        timestamps: true
    })
)

module.exports= {
    Description,
}