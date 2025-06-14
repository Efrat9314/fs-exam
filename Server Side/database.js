import mongoose from 'mongoose';


const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://efrat1093:vG%239NVmw-zsLcUA@cluster0.mssaa4h.mongodb.net/tasks_db?retryWrites=true&w=majority');
}

const database=mongoose.connection;
database.on('error',(error)=>{
    console.error(error);
})

database.once('connected',()=>{
    console.log('Database Connected!')
})
export default connectDB;
