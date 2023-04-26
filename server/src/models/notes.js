import mongoose from "mongoose";

//schema

const schema = mongoose.Schema({
        title: String,
        content: String
    })
export default mongoose.model('Notes', schema)