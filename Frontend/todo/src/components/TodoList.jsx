import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  // Use your deployed backend URL
  const API_URL = 'https://task-2-sbjj.onrender.com/api/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/${id}`, { completed: !completed });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

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
  );
};

export default TaskList;