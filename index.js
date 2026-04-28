import express from "express";
import { connectDB } from "./src/db.js";
import dotenv from "dotenv";
import {router} from "./src/routes/user.routes.js";

dotenv.config();
const app = express()
app.use(express.json());

app.use("/api/user",router)



app.get("/",  (req,res) =>{
    res.cookie("name","adnna");
    res.send("hallo")
})

connectDB();
const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`app runing on port no : ${port}`)
})