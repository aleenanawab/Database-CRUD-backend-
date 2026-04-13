require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(express.json());

// ROUTES
app.use("/api", require("./routes/productroutes"));

const PORT = 5000;

app.listen(PORT, () => console.log("🚀 Server running on port 5000"));