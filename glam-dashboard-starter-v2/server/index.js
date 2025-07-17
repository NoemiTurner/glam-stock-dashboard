const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5000;
const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY";

app.use(cors());

app.get("/api/stock/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    res.json(response.data["Global Quote"]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
