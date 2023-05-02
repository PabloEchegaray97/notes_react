import mongoose from "mongoose";

//schema

const schema = mongoose.Schema({
        title: String,
        content: String,
        time: String,
        priority: String
    })
export default mongoose.model('Notes', schema)