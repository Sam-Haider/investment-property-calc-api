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
        },
        downPayment: {
            type: Number,
            required: true
        },
        interestRate: {
            type: Number,
            required: true
        },
        loanTerm: {
            type: Number,
            required: true
        },
        rentalIncome: {
            type: Number,
            required: true
        },
        expenses: {
            type: Number,
            required: true
        },
    }
)

const Property = mongoose.model("Property", propertySchema)
module.exports = Property