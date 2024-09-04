import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";  
import  dotenv from "dotenv";
import connectDB from "./utils/db.js";
import  userRoute from "./routes/user.route.js";
import  companyRoute from "./routes/company.route.js";
import  jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({
    path:'./.env'
});
const app=express();
const PORT=process.env.PORT||3000;
//middleware
app.use(express.json()); //make data available at req.body
app.use(express.urlencoded({extended:true})); // make url available at req.body
app.use(cookieParser());
const corsOptions={
    // origin:'http//localhost:5173',     //req from this server only
    origin: "*",
    credentials:true
}
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);
app.use(cors(corsOptions));
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})