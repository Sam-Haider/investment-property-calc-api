const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors({ origin: [process.env.CLIENT_ORIGIN, "http://localhost:3000"] }));

const mongoose = require("mongoose");
const propertiesRoutes = require("./routes/properties");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = `mongodb+srv://sam:${process.env.DB_PASSWORD}@cluster0.ifdiz.mongodb.net/`;

mongoose
  .connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("connected to mongoDB"))
  .catch((e) => console.log("whoops, issue connecting to mongoDB:", e));

app.use("/", propertiesRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
