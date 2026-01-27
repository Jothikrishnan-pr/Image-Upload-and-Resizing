const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  formats: {
    thumbnail: { type: String },
    medium: { type: String },
    large: { type: String }
  },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Image", imageSchema);
