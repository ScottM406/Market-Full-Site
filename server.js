require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(require("./api/auth").router);

app.use("/orders", require("./api/orders"));
app.use("/products", require("./api/products"));

app.get("/", (req, res) => {
  res.send("Welcome to the Market API!");
});

app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found. Please re-check your request" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json(err.message || "Something went wrong. Please try again later or contact our support team.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});