require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(express.json());
app.use("/api", require("./src/routes/productRoutes"));

// ROUTES
require('./src/routes/productRoutes');

const PORT = 5000;

app.listen(PORT, () => console.log("🚀 Server running on port 5000"));