import mongoose from "mongoose";
const connectDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    }
    catch(error){
        console.log("Error is: ", error);
    }
}
export default connectDB;