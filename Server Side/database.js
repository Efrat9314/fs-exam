import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB= async()=>{
    await mongoose.connect(process.env.cloud_uri);
}

const database=mongoose.connection;
database.on('error',(error)=>{
    console.error(error);
})

database.once('connected',()=>{
    console.log('Database Connected!')
})
export default connectDB;