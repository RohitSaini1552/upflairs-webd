import React from 'react'
import './TaskItem.css'

function TaskItem({ task, deleteTask, changeTaskStatus, handleEditClick }) {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Pending':
      default:
        return 'status-pending';
    }
  };

  return (
    <div className="task-item-container">
      <h3 className="task-item-header">{task.title}</h3>
      {task.description && <p className="task-item-description">{task.description}</p>}

      <div className="task-item-info">
        <span className={getPriorityClass(task.priority)}>Priority: {task.priority}</span>
        <span className={getStatusClass(task.status)}>Status: {task.status}</span>
      </div>

      <div className="task-item-actions">
        <button onClick={() => handleEditClick(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>

        <select
          value={task.status}
          onChange={(e) => changeTaskStatus(task.id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}

export default TaskItem
