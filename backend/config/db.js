import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ShekharStark:8221009000@cluster0.gu74aow.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}