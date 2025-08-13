const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

// Upload endpoint
app.post("/upload/:username", upload.single("file"), (req, res) => {
  const username = req.params.username;
  const newPath = path.join(__dirname, "uploads", `${username}.json`);

  fs.renameSync(req.file.path, newPath);
  res.send({ status: "success", message: `File saved as ${username}.json` });
});

// Download endpoint
app.get("/download/:username", (req, res) => {
  const filePath = path.join(__dirname, "uploads", `${req.params.username}.json`);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send({ error: "File not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});