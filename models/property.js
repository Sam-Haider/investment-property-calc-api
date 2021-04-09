const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema(
    {
        purchasePrice: {
            type: String,
            required: true
        }
    }
)

const Property = mongoose.model("Property", propertySchema)
module.exports = Property