import mongoose from 'mongoose';
import { boolean } from 'zod';
const { Schema } = mongoose;

const mongoose = require("mongoose");


mongoose.connect("")
const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
})
const todo = mongoose.model("todos", todoSchema);
module.exports = {
    //  todo: todo
    todo
}