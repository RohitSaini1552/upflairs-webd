import React, { useState } from 'react'
import './TaskForm.css'
function TaskForm({addTask,editingTask, editTask,setEditingTask}) {
    const[title,setTitle]=useState('');
    const [description, setDescription] = useState('');
      const [priority, setPriority] = useState('Medium');
       
      const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title){
            alert('Task title is required');
            return ;
        }
        const newT={
            title:title.trim(),
            description:description.trim(),
            priority
        }
        if(editingTask){
            updateTask({
                ...editingTask,...newT
            })
        } else{
            addTask(newT);
        }
        setTitle('');
        setDescription('');
        setPriority('Medium');
      }
      
      function handleCancelEdit(){
            setEditingTask(null);
        }
     
  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="desciption">Description:</label>
          <textarea
            id="desciption"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">
            {editingTask ? "Save Changes" : "Add Task"}
          </button>

          {editingTask ? (
            <button type="button" onClick={handleCancelEdit}>
              Cancel Edit
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default TaskForm
