import jwt from "jsonwebtoken";

const verifyjwt = async(req , res , next ) => {
    try {
        const authHeader = req.headers.authorization

        const token = authHeader.split(" ") [1]

        if(!token){
            return res.status(500).json({message : "invalid token"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded

        next();

        
    } catch (error) {
        return res.status(401).json({message : "no token availible"})
    }
} 

export {verifyjwt}