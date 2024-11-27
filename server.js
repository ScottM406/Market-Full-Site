require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

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