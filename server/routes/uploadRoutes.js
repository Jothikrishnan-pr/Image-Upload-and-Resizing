const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const Image = require("../models/Image"); // your MongoDB model

const router = express.Router();

// Create folders if they don't exist
const folders = ["uploads/originals", "uploads/thumbnail", "uploads/medium", "uploads/large"];
folders.forEach(folder => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/originals"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post("/", upload.array("images"), async (req, res) => {
  try {
    const files = req.files;
    const savedImages = [];

    for (const file of files) {
      const filename = file.filename;

      // Resize using sharp
      await sharp(file.path).resize(150).toFile(`uploads/thumbnail/${filename}`);
      await sharp(file.path).resize(500).toFile(`uploads/medium/${filename}`);
      await sharp(file.path).resize(1000).toFile(`uploads/large/${filename}`);

      // Save to MongoDB
      const doc = await Image.create({
        originalName: file.originalname,
        formats: {
          thumbnail: `/uploads/thumbnail/${filename}`,
          medium: `/uploads/medium/${filename}`,
          large: `/uploads/large/${filename}`
        }
      });

      savedImages.push(doc);
    }

    res.json(savedImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
