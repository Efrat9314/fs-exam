import TaskModel from "./TaskModel.js";

const TaskController = {
    getAll: async (req, res) => {
        try {
            const tasks = await TaskModel.find();
            res.status(200).json(tasks);
        }
        catch (e) {
            res.status(400).json({ error: e.massage })
        }
    },
    getById: async (req, res) => {
        try { 
            const { id } = req.params
            const task = await TaskModel.findById(id)
            res.status(200).json(task);
        }
        catch (e) {
            res.status(400).json({ error: e.massage })
        }
    },
    post: async (req, res) => {
        try {
            const { title, time } = req.body
            const newTask = await TaskModel.create({ title, time, isCompleted: false })
            res.status(200).json(newTask);
        }
        catch (e) {
            res.status(400).json({ error: e.massage })
        }
    },
    put: async (req, res) => {
        try {
            const { id } = req.params
            const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(updatedTask);
        }
        catch (e) {
            res.status(400).json({ error: e.massage })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deletedTask = await TaskModel.findByIdAndDelete(id)
            res.status(200).json(deletedTask);
        }
        catch (e) {
            res.status(400).json({ error: e.massage })
        }
    }
}
export default TaskController;