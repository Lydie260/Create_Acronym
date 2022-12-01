import mongoose from "mongoose";
const acronymSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            unique: true,
            required: true
        
        }
        ,
        Description:{
            type: String,
            unique: true,
            required: true
        
        },

    }, {
        timestamps: true
      }
)
export default mongoose.model("acronym",acronymSchema);