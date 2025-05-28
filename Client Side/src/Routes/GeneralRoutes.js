// import React from 'react'
// import {Navigate, Route, Routes} from 'react-router-dom'
// import TaskList from './../Task/TaskList';
// import TaskItem from './../Task/TaskItem';
// import TaskForm from '../Task/TaskForm';

// export default function GeneralRoutes() {
//   return (
//     <Routes>
//         <Route path="/" element={<Navigate to="/tasks" replace />} />
//         <Route path='/tasks' element={<TaskList/>}></Route>
//         <Route path='/tasks/:id/' element={<TaskItem/>}></Route>
//         <Route path='/tasks/create/' element={<TaskForm/>}></Route>
//     </Routes>
//   )
// }
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TaskList from './../Task/TaskList';
import TaskItem from './../Task/TaskItem';
import TaskForm from '../Task/TaskForm';

export default function GeneralRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tasks" replace />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/tasks/create" element={<TaskForm mode="create" />} />
      <Route path="/tasks/:id" element={<TaskItem />} />
    </Routes>
  );
}

