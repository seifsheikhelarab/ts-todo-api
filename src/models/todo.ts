//imporing mongoose
import mongoose from "mongoose";


//creating a schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending",
    },
    createdOrUpdatedAt:{
        type: Date,
        default: Date.now
    }
});

//creating a model
export const todo = mongoose.model("todo", todoSchema);