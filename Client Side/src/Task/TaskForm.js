import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useTasksStore from '../Store/tasksStore';
import { useNavigate } from 'react-router-dom';
import './Task.css';


export default function TaskForm() {

    const addTask = useTasksStore((state) => state.addTask);
    const updateTask = useTasksStore((state) => state.updateTask);
    const navigate = useNavigate();
    const location = useLocation();
    const initialTask = location.state?.task;
    const mode = location.state?.mode || 'create';

    const [task, setTask] = useState({
        title: '',
        time: '',
    });

    useEffect(() => {
        if (mode === 'edit' && initialTask) {
            setTask({
                title: initialTask.title || '',
                time: initialTask.time || '',
                isComplete: initialTask.isComplete || false,
            });
        }
    }, [mode, initialTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: name === 'time' ? Number(value) : value, }));
    };

    const saveTask = (e) => {
        e.preventDefault();
        if (!task.title.trim()) {
            alert('Please enter a task title');
            return;
        }
        mode === 'create' ? addTask(task) : updateTask(initialTask._id, task);
        navigate('/')
    };

    return (
        <form onSubmit={saveTask} className='form'>
            <label>
                Name
                <input
                    type='text'
                    name="title"
                    value={task.title}
                    placeholder='Enter task title'
                    onChange={handleChange}
                />
            </label>
            <label>
                Time
                <input
                    type='number'
                    name="time"
                    value={task.time}
                    placeholder='Enter time estimatןםמ'
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>{mode === 'edit' ? 'Update' : 'Create'}</button>
        </form>
    );
}
