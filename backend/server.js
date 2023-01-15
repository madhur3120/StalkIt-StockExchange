require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const cipla = require("./models/table");
// const HttpError = require("./models/http-error");
// const userRoutes = require("./routes/user");
const companiesRoutes = require("./routes/company");
const usersRoutes = require("./routes/user");
// const transRoutes = require("./routes/transactions");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
}); //cors error

// app.use("/users", userRoutes);
app.use("/companies", companiesRoutes);
app.use("/users", usersRoutes);
// app.use("/trans", transRoutes);

// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const dbUrl =
  "mongodb+srv://" +
  process.env.USERR +
  ":" +
  process.env.PASSWORD +
  "@cluster0.f8yjf.mongodb.net/" +
  process.env.DATABASE +
  "?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5001);
  })
  .catch((err) => {
    console.log(err);
  });
