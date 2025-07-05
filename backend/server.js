require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stripe", require("./routes/stripe"));
app.use("/api/events", require("./routes/events"));

// Serve frontend
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend")));
app.get("/*randomName", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/index.html"))
);

app.listen(3000, () => console.log("Server started on port 3000"));
