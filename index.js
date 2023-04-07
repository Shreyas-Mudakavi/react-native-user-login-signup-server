const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log("Database connected!"))
  .catch((err) => console.log("database err ", err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

app.get("/", (req, res, next) =>
  res.json({ status: "This is were you stop!" })
);
