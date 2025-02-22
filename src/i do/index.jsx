import React, { useEffect, useState } from "react";
import '../assets/css/layout.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleTask = () => {
    if (!input) return;

    let updatedTasks;
    if (editingIndex !== null) {
      updatedTasks = [...tasks]; // Copy the tasks array to ensure immutability
      updatedTasks[editingIndex] = input; // Update the specific task
      setEditingIndex(null);
    } else {
      updatedTasks = [...tasks, input]; // Add a new task
    }

    setTasks(updatedTasks);
    setInput("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <body>
        <div className="task">
          <div className="input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={editingIndex !== null ? "Edit task..." : "Add a task..."}
            />
            <button onClick={handleTask}>{editingIndex !== null ? "Update" : "Add"}</button>
          </div>
          <div className="output">
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
