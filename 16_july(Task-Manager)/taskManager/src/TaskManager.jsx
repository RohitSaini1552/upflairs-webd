import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './TaskManager.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks(prev => [...prev, { ...task, id: Date.now(), status: 'Pending' }]);
  }

  function editTask(editedTask) {
    setTasks(prev => prev.map(task => task.id === editedTask.id ? editedTask : task));
    setEditingTask(null);
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function changeTaskStatus(id, newStatus) {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, status: newStatus } : task));
  }

  function handleEditClick(task) {
    setEditingTask(task);
  }

  return (
    <div className="task-manager-container">
      <h1 className="app-header">My Task Planner</h1>
      <div className="task-form-wrapper">
        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          editTask={editTask}
          setEditingTask={setEditingTask}
        />
      </div>
      <div className="task-list-wrapper">
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
          handleEditClick={handleEditClick}
        />
      </div>
    </div>
  );
}

export default TaskManager;