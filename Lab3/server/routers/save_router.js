const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

// single file upload route
router.post("/single", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ message: `File uploaded successfully: ${fileUrl}` });
});

// multiple file uploads route
router.post("/multiple", upload.array("files", 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }
  const fileUrls = req.files.map(
    (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
  );
  res.status(200).json({
    message: `Files uploaded successfully: ${fileUrls.join(", ")}`,
    files: fileUrls,
  });
});

module.exports = router;
