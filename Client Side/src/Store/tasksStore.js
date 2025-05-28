import { create } from 'zustand';
import axios from 'axios';

const useTasksStore = create((set, get) => ({
  tasks: [],
  loading: false,

  fetchTasks: async () => {
    set({ loading: true });
    try {
      const res = await axios.get('/tasks');
      set({ tasks: res.data });
    } 
    catch (err) {
      console.error('Failed to fetch tasks:', err);
    } 
    finally {
      set({ loading: false });
    }
  },

  addTask: async (newTask) => {
    try {
      const res = await axios.post('/tasks', newTask);
      set((state) => ({ tasks: [...state.tasks, res.data] }));
    } 
    catch (err) {
      console.error('Failed to add task:', err);
    }
  },

  updateTask: async (id, updatedTask) => {
    try {
      const res = await axios.put(`/tasks/${id}`, updatedTask);
      set((state) => ({
        tasks: state.tasks.map((t) => (t._id === id ? res.data : t)),
      }));
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  },

  toggleComplete: (id) => {
    const task = get().tasks.find((t) => t._id === id);
    if (!task) return;
  
    const updatedTask = { ...task, isComplete: !task.isComplete };
    get().updateTask(id, updatedTask);
  }
  
}));

export default useTasksStore;
