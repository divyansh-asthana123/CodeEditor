import mongoose from "mongoose";

const submittedCodeSchema = new mongoose.Schema({
    submittedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    submittedCode: {
            type: String,
            required: true,
    },
    language: {
        type: String,
        required: true
    },
    languageVersion: {
        type: String,
        required: true
    },
    result: {
        type: Boolean,
        required: true
    },
    errorType: {
        type: String,
        default: null
    }
})

export const SubmittedCode = mongoose.model("SubmittedCode", submittedCodeSchema);