import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['Administrador','Vendedor'],
        require:true,
        trim:true,
    },
},{
    timestamps:true
})
export default mongoose.model('User',userSchema)