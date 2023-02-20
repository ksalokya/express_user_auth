import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please enter your first name."]
    },
    lname: { 
        type: String, 
        required: [true, "Please enter your last name."]
    },
    mobno: {
        type: String,
        required: [true, "Please enter your mobile number."]
    },
    email: {
        type: String,
        required: [true, "Please enter your mail-ID"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    }
});

export default mongoose.model('User', userSchema);