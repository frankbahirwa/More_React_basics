import React, { useState, useEffect } from "react";
import '../assets/css/layout.css';

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
      } catch (error) {
        console.error("Error loading tasks:", error);
        return [];
      }
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleTask = (e) => {
    e.preventDefault();
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
      
    
      <form onSubmit={handleTask}>
      <div class="oll">
      <div class="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={editingIndex !== null ? "Edit task..." : "Add a task..."}
        />
        <button type="submit">{editingIndex !== null ? "Update" : "Add"}</button>
        </div> <br />
      
      
      <div class="output">
      <ul>
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
    </form>
    </body>

    </>);
}

export default TaskManager;
