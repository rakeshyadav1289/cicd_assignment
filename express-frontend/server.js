const express = require("express");
const app = express();
const axios = require("axios");

// Serve frontend route
app.get("/", (req, res) => {
  res.send("<h1>Hello from Express Frontend!</h1>");
});

// Example route calling Flask backend
app.get("/fetch-backend", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/api/data");
    res.json({ backendData: response.data });
  } catch (error) {
    res.status(500).json({ error: "Unable to reach Flask backend" });
  }
});

// Run on port 3000
app.listen(3000, () => {
  console.log("Express server running on port 3000");
});