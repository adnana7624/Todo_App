import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    fname : {
        type : String,
        required : true
     },
     email : {
        type : String,
        required : true,
        unique : true
     },
     password : {
        type : String,
        required : true
     },
     phoneN0 : {
        type : Number
     }

},{timestamps : true})

export const User = mongoose.model("User",userSchema)