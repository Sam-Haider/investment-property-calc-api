const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  addProperty,
  getProperties,
  updateProperty,
  deleteProperty,
} = require("../handlers/properties");

router.route("/properties").post(addProperty).get(getProperties);
router.route("/properties/:id").patch(updateProperty).delete(deleteProperty);

module.exports = router;
