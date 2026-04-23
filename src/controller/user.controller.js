import {User} from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req , res) => {
    try {
        const {name,fname,email,password,phoneN0 } = req.body;
    
        const exist = await User.findOne({email})
    
        if(exist){
            return res.status(401).json({message:"user alredy exist"})
        }
    
        const hash = await bcrypt.hash(password,10)
    
        await User.create({
            name,
            fname,
            email,
            password:hash,
            phoneN0
        })
        return res.status(200).json({message:"user registered successfully"})
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}

export const login = async(req,res) => {
    try {
        const {email,password} = req.body

        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({message:"user not found"})
        }

        const checkpassword = await bcrypt.compare(password,user.password)

        if(!checkpassword){
            return res.status(401).json({message:"password is incorext"})
        }

        const token = jwt.sign(
            {id : user._id},
            process.env.JWT_SECRET,
            {expiresIn : "1d"}
        )
        
        return res.status(200)
        .json({message:"user logedin succesfull" ,token })
    } catch (error) {
        res.status(500).json(error.message)
    }
}