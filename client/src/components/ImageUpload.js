import React, { useState } from "react";
import axios from "axios";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setPreviews(files.map((f) => URL.createObjectURL(f)));
    setMessage("");
    setError(false);
  };

  const handleUpload = async () => {
    if (!selectedFiles.length) {
      setError(true);
      setMessage("Please select images first");
      return;
    }

    setUploading(true);
    setMessage("");
    setError(false);

    const formData = new FormData();
    selectedFiles.forEach((f) => formData.append("images", f));

    try {
      await axios.post("http://localhost:5000/api/upload", formData);
      setMessage("Upload successful ✔");
      setSelectedFiles([]);
      setPreviews([]);

      // auto-hide success message
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setError(true);
      setMessage("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="cosmic-bg">
      {/* extra sparks */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className={`spark s${i}`} />
      ))}

      <div className={`neon-card ${error ? "shake" : ""}`}>
        <h2>Image Upload and Resizing Pipeline</h2>

        <label className="upload-zone">
          <input type="file" multiple accept="image/*" onChange={handleFileChange} />
          <span>Click or drop images here</span>
        </label>

        <div className="preview-row">
          {previews.map((src, i) => (
            <div className="preview-box" key={i}>
              <img src={src} alt="preview" />
            </div>
          ))}
        </div>

        <button
          className={`neon-btn ${uploading ? "loading" : ""}`}
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Images"}
        </button>

        {message && (
          <p className={`msg ${error ? "error" : "success"}`}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
