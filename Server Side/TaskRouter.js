import express from 'express';
import TaskController from './TaskController.js';

const TaskRouter=express.Router();

TaskRouter.get('/',TaskController.getAll);
TaskRouter.post('/',TaskController.post);
TaskRouter.get('/:id',TaskController.getById);
TaskRouter.put('/:id',TaskController.put);
TaskRouter.delete('/:id',TaskController.delete);

export default TaskRouter;