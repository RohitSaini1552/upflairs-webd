import React from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'
function TaskList({ tasks, deleteTask, changeTaskStatus, handleEditClick }) {
  return (
    <div className="task-list-container">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
          handleEditClick={handleEditClick}
        />
      ))}
    </div>
  )
}

export default TaskList
