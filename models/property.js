const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema(
    {
        propertyAddress: {
            type: String,
            required: true
        },
        purchasePrice: {
            type: Number,
            required: true
        }
    }
)

const Property = mongoose.model("Property", propertySchema)
module.exports = Property