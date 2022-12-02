import acronymModel from "../model/acronymModel";

class  DataChecker{

    static validateName = async(req,res,next)=>{
        const name = await  acronymModel.findOne({name:req.body.name});
        if(!name){
            return next();
        }
        return res.status(404).json({
            status:404,
            message:"name already exist"
        })
    }
    
    
        static checkDescption = (req,res,next)=>{
            if(req.body.description == " "){
                return res.status(404).json({
                    status:404,
                    message:"Description is Empty"
                })
            }
        }
    
    }
    
    export default DataChecker