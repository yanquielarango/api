import mongoose from "mongoose";
import Notes from "../mongodb/models/notes.js";



// Get all Notes from MongoDB
const getAllNotes = async (req, res) => {
    const notes = await Notes.find().sort({createdAt: -1})

    res.status(200).json(notes)
}


// Get note by ID 
const getNoteById = async (req, res) => {
    const {id} = req.params;

    const note = await Notes.findById(id)

    if (!note) {
        return res.status(404).json({error: "No such notes"})
    }
    
    res.status(200).json(note)

}

    // Create a single note
const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNote = await Notes.create({title,description});
        res.status(200).json(newNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a single note 
const deleteNote = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such notes'})
    }

    const note = await Notes.findOneAndDelete({_id: id})

    if (!note) {
        return res.status(404).json({error: "No such notes"})
    }

    res.status(200).json(note)
}

// Update note
const updateNote = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such notes'})
    }

    const note = await Notes.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!note) {
        return res.status(404).json({error: "No such notes"})
    }

    res.status(200).json(note)
}

export {  getNoteById, createNote, getAllNotes, deleteNote, updateNote};