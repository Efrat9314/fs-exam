import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { Link } from 'react-router-dom';
import useTasksStore from '../Store/tasksStore';
import './Task.css';


export default function TaskList() {
    const tasks = useTasksStore((state) => state.tasks);
    const loading = useTasksStore((state) => state.loading);
    const fetchTasks = useTasksStore((state) => state.fetchTasks);
    const toggleComplete = useTasksStore((state) => state.toggleComplete);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    if (loading) return <p>Loading tasks...</p>;

    return (
        <div className='tasks-container'>
            <h1>My Tasks📋</h1>
            <ul className='task-list'>
                {tasks && tasks.map(task => (
                    <TaskItem key={task._id} task={task} toggleComplete={toggleComplete} />
                ))}
            </ul>
            <Link to="create" className='form-link'>Add Task</Link>
        </div>
    );
}
