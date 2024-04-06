import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        id : {
            type: Number,
            required: true
        },
        teamName: {
            type: String,
            required: true,
        },
        teamDomain: {
            type: String,
        },
        members: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        },
    },
    { timestamps: true }
);

const teamModel = mongoose.model("Team", teamSchema);

export default teamModel;
