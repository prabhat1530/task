import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:4000/api/tasks');
    setTasks(response.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/tasks', newTask);
    setNewTask({ title: '', description: '' });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:4000/api/tasks/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (id, completed) => {
    await axios.put(`http://localhost:4000/api/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

 // In the return statement of TaskList.js
return (
  <div className="App">
    <h1>Task Manager</h1>
    <form className="task-form" onSubmit={addTask}>
      <input
        className="task-input"
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        className="task-input"
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button className="add-button" type="submit">
        Add Task
      </button>
    </form>
    <ul className="task-list">
      {tasks.map((task) => (
        <li 
          className={`task-item ${task.completed ? 'completed' : ''}`} 
          key={task._id}
        >
          <input
            className="task-checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task._id, task.completed)}
          />
          <div className="task-content">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
          </div>
          <button 
            className="delete-button"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
)};

export default TaskList;