const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes
const userRoutes = require("./routes/users");
const flightRoutes = require("./routes/flights");

app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);

// Default to frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
