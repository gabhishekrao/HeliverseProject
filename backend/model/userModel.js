import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true

    },
    first_name: {
        type: String,

    },
    last_name: {
        type: String,

    },
    email: {
        type: String,

    },
    gender: {
        type: String,

    },
    avatar: {
        type: String,

    },
    domain: {
        type: String,

    },
    available: {
        type: Boolean,

    },
}, { timestamps: true });


const userModel = mongoose.model("User", userSchema)

export default userModel;