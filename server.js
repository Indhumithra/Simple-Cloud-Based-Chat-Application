const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

// Example API (optional)
app.post("/api/message", (req, res) => {
  const { text, user } = req.body;
  res.json({
    status: "Message received",
    text,
    user
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
