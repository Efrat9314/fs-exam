import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskItem({ task, toggleComplete }) {
  const navigate = useNavigate();

  return (
    <li className={`task ${task.isComplete ? 'complete' : ''}`}>
      <span className="task-title">{task.title}</span>
      <span className="task-time">{task.time}</span>
      <button onClick={() => toggleComplete(task._id)}>
        {task.isComplete ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => { navigate('tasks/create', { state: { mode: 'edit', task } }); }}>
        Edit
      </button>
    </li>
  );
}


