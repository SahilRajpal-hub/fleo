const express = require("express");
const bodyParser = require("body-parser");
const { connectDb } = require("./config/db");
const saleRouter = require("./routes/saleRoute");
const app = express();
const PORT = 5000;

connectDb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/companySale", saleRouter);

app.get("/", (req, res) => {
  console.log("object");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
