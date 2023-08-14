import mongoose from "mongoose";

// User Schema Created - It includes all the required fields.
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
} , {
    timestamps : true
});

//MongoDB Model Created
const User = mongoose.model('User', userSchema);
export default User;

