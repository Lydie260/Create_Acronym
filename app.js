import bodyParser from 'body-parser';
import express from 'express';
import "dotenv/config";
import mongoose from "mongoose";
import routes from "./src/Routes"

const app = express();
app.use(bodyParser.json());
app.use('/',routes)

const dbUrl = process.env.DATABASE_URL;
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected succesfully");
  });

const port = process.env.PORT || 4045;
// app.listen(2000,()=>{
//     console.log ('server is running on port 2000');
// })  
app.listen(2000,() =>{
    console.log ("server is running on port 2000");
})
export default app;