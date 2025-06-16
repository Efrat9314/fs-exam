import http from 'http'
import cors from 'cors';
import express from 'express';
import TaskRouter from './TaskRouter.js';
import connectDB from './database.js';
import {logIpAndPath,ValidateReqBody,checkTaskOwner,errorHandler} from './Middlewares.js'


const app = express();
connectDB();
app.use(cors()); 
app.use(express.json());
app.use('/', logIpAndPath);
app.post('/tasks', ValidateReqBody);
app.put('/tasks/:id', ValidateReqBody);
app.use('/tasks/userId',checkTaskOwner);
app.use('/tasks', TaskRouter);
app.use(errorHandler);

app.listen(5000, () => {
    console.log('app is listening on port 5000');
})
