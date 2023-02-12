
import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{ timestamps: true }
);

const noteModel = mongoose.model("Note", NoteSchema);

export default noteModel;