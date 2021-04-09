const express = require("express")
const router = express.Router({ mergeParams: true })

const { addProperty, getProperties } = require("../handlers/properties")

router
    .route("/property")
    .post(addProperty)
    .get(getProperties)

module.exports = router