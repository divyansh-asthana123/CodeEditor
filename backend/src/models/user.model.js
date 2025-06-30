//STEP 1: Import mongoose from mongoose
import mongoose from "mongoose";

//STEP 2: Create a user schema upon which the data would be stored in the DB
const userSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: [true, "email id is required for registration"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: [6, "password should be of minimum 6 characters in length"]
    },
    username: {
        type: String,
        required: [true, "username is required during registration"],
        unique: [true, "username should be unique"],
        lowercase: true
    },
    pastSubmissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubmittedCode"
        }
    ]
},
{
    timestamps: true
})



//STEP 3: Export default Usre Model made from the schema userSchema
export const User = mongoose.model("User",userSchema)

