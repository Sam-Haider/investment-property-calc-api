const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyAddress: {
    type: String,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
  downPayment: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  loanTerm: {
    type: Number,
    required: true,
  },
  rentalIncome: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  mortgagePayment: {
    type: Number,
    required: true,
  },
  cashFlow: {
    type: Number,
    required: true,
  },
  cocReturn: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
