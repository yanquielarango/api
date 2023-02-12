import mongoose from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    avatar: { type: String, required: true},
    allNotes: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Notes'}],
});


const userModel = mongoose.model('User', UserSchema);

export default userModel;

