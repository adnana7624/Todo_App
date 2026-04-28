import express from "express";
import {signup , login} from "../controller/user.controller.js";
import { verifyjwt , isadmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login" , login)

router.get("/profile",verifyjwt , (req , res ) => {
    return res.status(200).json({message : "user profile ", user : req.user})
})

router.get("/admin",verifyjwt,isadmin , (req,res) =>{
    return res.status(200).json({message:"you are logedIn as admin"})
})
export {router}