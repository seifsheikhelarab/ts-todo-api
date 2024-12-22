//importing npm modules
import express from "express";
import mongoose from "mongoose";
import { todo } from "../models/todo";

//setting up the router
const router = express.Router();

//GET request to get all the tasks
router.get("/", async (req, res) => {
    todo.find()
        .then((todos) => res.json(todos))
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "server error" });
        });
});

//POST request to create a new task
router.post("/", (req, res) => {
    const { title } = req.body;
    const newTodo = new todo({
        title,
        status: "pending",
        createdOrUpdatedAt: Date.now()
    });
    newTodo.save()
        .then((newTodo) => res.json(newTodo))
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "server error" });
        });
});

//PUT request to update the status of a task
router.put("/:id", (req, res) => {
    todo.findById(req.params.id)
        .then((updatedTodo) => {
            if (!updatedTodo) {
                return res.status(404).json({ error: "task not found" });
            }
            const newStatus = updatedTodo.status === "pending" ? "completed" : "pending";
            updatedTodo.status = newStatus;
            updatedTodo.createdOrUpdatedAt = new Date();
            updatedTodo.save()
                .then((updatedTodo) => res.json(updatedTodo))
                .catch((error) => {
                    console.error(error);
                    res.status(500).json({ error: "server error" });
                });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "server error" });
        });
});

//GET request to get a task by id
router.get("/:id", (req, res) => {
    todo.findById(req.params.id)
        .then((task) => {
            if (!task) {
                return res.status(404).json({ error: "server error" });
            }
            res.json(task);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "server error" });
        });
});

//DELETE request to delete a task by id
router.delete("/:id", (req, res) => {
    todo.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "task deleted" }))
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "server error" });
        });
});

//exporting the router
export default router;