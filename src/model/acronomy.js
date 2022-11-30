import mongoose from "mongoose";
const Schema = new mongoose.Schema(
    {
        name:String,
        Description:String
    }
)
export default mongoose.model("acronym",Schema);