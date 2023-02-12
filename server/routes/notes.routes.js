import express from 'express';
import { createNote, getAllNotes, getNoteById, deleteNote, updateNote} from '../controllers/notes.controller.js';

const router = express.Router();

router.route('/').get(getAllNotes) 
router.route('/:id').get(getNoteById) 
router.route('/').post(createNote);
router.route('/:id').delete(deleteNote);
router.route('/:id').patch(updateNote);



export default router;