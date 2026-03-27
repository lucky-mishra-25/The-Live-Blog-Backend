const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ----------------------
// FORCE MongoDB Connect
// ----------------------
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Start server ONLY after DB connects
    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });

  } catch (error) {
    console.error("❌ MongoDB FAILED:", error.message);
  }
}

startServer();

// ----------------------
// Schema
// ----------------------
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

// ----------------------
// Routes
// ----------------------
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/api/posts", async (req, res) => {
  const newPost = new Post(req.body);
  const saved = await newPost.save();
  res.json(saved);
});

app.delete("/api/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});