import React, { useState } from "react";
import '../assets/css/layout.css'

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleTask = () => {
    if (!input) return;
    if (editingIndex !== null) {
      tasks[editingIndex] = input;
      setEditingIndex(null);
    } else {
      tasks.push(input);
    }
    setTasks([...tasks]);
    setInput("");
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
   
    <>
    <body>
      
   
    <div class="task">
    <div class="input">
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={editingIndex !== null ? "Edit task..." : "Add a task..."}
      />
      <button onClick={handleTask}>{editingIndex !== null ? "Update" : "Add"}</button>
</div>
<div class="output">
      <ul><br />
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => { setEditingIndex(index); setInput(task); }}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </li>


))}
      </ul>
      </div>
      </div>
      </body>
    </>

  );

}

export default TaskManager;
