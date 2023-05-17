const db = require("../models");

exports.addProperty = async function (req, res) {
  try {
    const mortgage = {
      loan: parseInt(req.body.purchasePrice - req.body.downPayment),
      interest: parseInt(req.body.interestRate),
      term: parseInt(req.body.loanTerm),
    };
    const calculateMonthlyPayment = ({ loan, interest, term }) => {
      const monthlyInterest = (interest * 0.01) / 12;
      const termInMonths = term * 12;
      const r = 1 / (1 + monthlyInterest);
      const payment = Math.round(
        loan * ((1 - r) / (r - Math.pow(r, termInMonths + 1)))
      );
      return payment;
    };
    const mortgagePayment = calculateMonthlyPayment(mortgage);
    const cashFlow =
      parseInt(req.body.rentalIncome) -
      mortgagePayment -
      parseInt(req.body.expenses);
    const cocReturn =
      ((cashFlow * 12) / parseInt(req.body.downPayment)).toFixed(2) * 100;

    const property = await db.Property.create({
      propertyAddress: req.body.propertyAddress,
      purchasePrice: req.body.purchasePrice,
      downPayment: req.body.downPayment,
      interestRate: req.body.interestRate,
      loanTerm: req.body.loanTerm,
      rentalIncome: req.body.rentalIncome,
      expenses: req.body.expenses,
      imagePath: req.body.imagePath,
      mortgagePayment,
      cashFlow,
      cocReturn,
    });

    return res.status(200).json(property);
  } catch (e) {
    console.log("Whoops, something went wrong: ", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateProperty = async function (req, res) {
  try {
    const propertyId = req.params.id;
    const updates = {
      propertyAddress: req.body.propertyAddress,
      purchasePrice: req.body.purchasePrice,
      downPayment: req.body.downPayment,
      interestRate: req.body.interestRate,
      loanTerm: req.body.loanTerm,
      rentalIncome: req.body.rentalIncome,
      expenses: req.body.expenses,
    };

    const updatedProperty = await db.Property.findByIdAndUpdate(
      propertyId,
      updates,
      { new: true }
    );

    return res.status(200).json(updatedProperty);
  } catch (e) {
    console.log("Whoops, something went wrong: ", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProperty = async function (req, res) {
  try {
    const propertyId = req.params.id;

    await db.Property.findByIdAndRemove(propertyId);

    return res.status(200).json({ message: "Property deleted successfully" });
  } catch (e) {
    console.log("Whoops, something went wrong: ", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProperties = async function (req, res) {
  try {
    const properties = await db.Property.find().sort({ createdAt: -1 });

    return res.status(200).json(properties);
  } catch (e) {
    console.log("Whoops, something went wrong: ", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
