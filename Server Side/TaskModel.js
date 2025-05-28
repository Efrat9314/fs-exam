import mongoose from "mongoose"

const TaskModel=mongoose.Schema({
    title:{
        type:String,
        reqired:true,
        trim:true
    },
    time:{
        type:Number,
        reqired:true,
    },
    isComplete:Boolean
})

export default mongoose.model('tasks',TaskModel)
