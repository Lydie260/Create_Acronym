import bodyParser from 'body-parser';
import express from 'express';
import "dotenv/config";

const app = express();
app.use(bodyParser.json());



// app.listen(2000,()=>{
//     console.log ('server is running on port 2000');
// })
app.listen(2000,() =>{
    console.log ("server is running on port 2000");
})
export default app