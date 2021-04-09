// const mongoose = require("mongoose");
// const uri = require("../config/db.js")
// mongoose.set("debug", true);
// mongoose.Promise = Promise;
// mongoose.connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
//     .then(() => console.log("connected"))
//     .catch((e) => console.log("whoops:", e))
module.exports.Property = require("./property")