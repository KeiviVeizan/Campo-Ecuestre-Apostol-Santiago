import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
    username: {
        type: String, required: true, trim: true
    },
    email: {
        type: String, required: true, unique: true
    },
    phone: {
        type: String, required: true, trim: true
    },
    plan: {
        type: String, required: true, trim: true,default:"uwu"
    }
}, {
    timestamps: true
})

export default mongoose.model('Register', registerSchema)