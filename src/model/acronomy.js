import mongoose from "mongoose";
const acronymSchema = new mongoose.Schema(
    {
        name:String,
        Description:String,
        // unique: true

    }, {
        timestamps: true
      }
)
export default mongoose.model("acronym",acronymSchema);