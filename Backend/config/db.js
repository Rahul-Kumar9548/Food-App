import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://rahulkumar290399:rahulkumar@cluster0.gdbm4.mongodb.net/food-del').then(()=>console.log("DB connected"));
}