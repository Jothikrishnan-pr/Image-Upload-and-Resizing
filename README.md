Title: Image Upload and Resizing Pipeline

Technologies:
React.js
Node.js
Express.js
Multer
sharp
MongoDB

Description:
Key Requirements: - Build a React component for image selection and preview. - Implement multi-file upload to Express.js via FormData. - On server, resize images to multiple dimensions using sharp. - Store resized images in local storage or cloud bucket and save URLs in MongoDB. Tools and Resources: - React.js for client UI. - Node.js, Express.js, Multer for handling multipart uploads. - Sharp library for image processing. - MongoDB for storing image metadata. Deliverables: - MERN application that accepts image uploads and serves resized versions. - Sample uploaded images in a test collection. - Documentation on supported image formats and size presets.


# 📦 MERN Image Upload App — Overview

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to upload images from a React frontend and store them in a Node.js server with MongoDB.

---

## 🚀 Features

* 📤 Upload images from React UI
* 🗄 Store image metadata in MongoDB
* ⚡ Express API for handling uploads
* 📂 Local storage for uploaded files
* 🌐 RESTful backend integration

---

## 🏗 Project Structure

```
project-root/
│
├── client/          # React frontend
│   ├── src/
│   └── package.json
│
├── server/          # Node + Express backend
│   ├── uploads/     # Uploaded images
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API routes
│   └── server.js
│
└── README.md
```

---

## ⚙️ Requirements

* Node.js & npm
* MongoDB (Local or Atlas)

---

## 🔧 Environment Setup

Create a `.env` file in the `server` folder:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/imageUploadDB
```

---

## 📥 Installation

### Install backend

```bash
cd server
npm install
```

### Install frontend

```bash
cd client
npm install
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

```bash
cd client
npm start
```

Frontend runs at:
👉 http://localhost:3000

Backend runs at:
👉 http://localhost:5000

---

## 📌 API Endpoint

### Upload Image

```
POST /api/upload
```

**Form Data**

```
image: file
```

---

## 🛠 Tech Stack

* React
* Node.js
* Express
* MongoDB
* Multer

---

## 📸 Possible Enhancements

* Cloud storage (Cloudinary / AWS S3)
* Image gallery view
* Drag & drop uploads
* Authentication

---

