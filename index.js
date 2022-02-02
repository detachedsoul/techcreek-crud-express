import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Blogs  from "./models/blogs.js";

const app = express();
app.use(express.json());

// Listen to a specified port
app.listen(process.env.PORT, () => {
    console.log("Server started!");
});

// Connect to our database
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Database connection successful!");
});


// Get all blogs
app.get("/blogs", async (req, res) => {
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
});

// Get a particular blog by ID
app.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    const blog = await Blogs.findById(id);

    // Show error if the ID doesn't match any found in the database
    if (!blog) {
        return res.status(404).send(`The blog post with the ID of ${id} ID does not exist.`);
    }

    res.status(200).json(blog);
});

// Create a new blog post
app.post("/create", async (req, res) => {
    const { title, author, summary } = req.body;
    const newBlog = new Blogs({ title, author, summary });
    await newBlog.save();

    res.status(200).send("Blog post created successfully!");
});

// Edit a blog by ID
app.put("/edit/:id", async (req, res) => {
    const id = req.params.id.toString();
    const { title, author, summary } = req.body;
    const editedBlog = await Blogs.findByIdAndUpdate(id, { title, author, summary });

    // Show an error if specified blog does not exist
    if (!editedBlog) {
        return res.status(404).send(`The blog post with the ID of ${id} ID does not exist.`);
    }

    res.status(200).send(`Blog post with the id of ${id} has been edited successfully!`);
});

// Delete a blog by ID
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const editedBlog = await Blogs.findByIdAndDelete(id);

    // Show an error if specified blog does not exist
    if (!editedBlog) {
        return res.status(404).send(`The blog post with the ID of ${id} ID does not exist.`);
    }

    res.status(200).send(`Blog post with the id of ${id} has been deleted successfully!`);
});