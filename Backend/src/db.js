import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        mongoose.connect('mongodb://localhost/merndb')//debo cambiar esto de acuerdo a la base de datos
        console.log("DB is connected")
    }catch(error){
        console.log(error);
    }
}
