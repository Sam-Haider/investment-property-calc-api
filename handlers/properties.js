const db = require("../models")

exports.addProperty = async function (req, res) {
    try {
        const property = await db.Property.create({
            purchasePrice: req.body.purchasePrice
        })
        console.log("property added ,", property)
        return res.status(200).json(property)
    } catch (e) {
        console.log("Whoops, something went wrong: ", e)
    }
}