// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors"); // <- Add this

const app = express();

// Enable CORS
app.use(cors()); // <- Allow all origins. You can customize this.
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on 5000")))
  .catch((err) => console.error(err));
