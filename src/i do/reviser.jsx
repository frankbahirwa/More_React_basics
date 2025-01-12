import React, { useState } from "react";
const TaskManager =() =>{
const [tasks ,setTasks] = useState([]);
const [input, setInput] = useState('');
const [editingIndex , setEditingIndex] = useState(null);


const handleTask = () =>{
if (!input) return;
if(editingIndex !== null) {
tasks[editingIndex] = input;
setEditinfIndex(null);

}
else{
    tasks.push(input);

}
setTasks([...tasks]);
setInput("");
};
const deleteTask = (index) =>setTasks(tasks.felter((_, i)=>i !==index));

return (
<>
<input type="text" value={input}onChange={(e) =>setInput(e.target.value)}
placeholder={editingIndex !== null ? "Edit task..." :"add a task ..."} />
<button onClick={handleTask}>{editingIndex !== null ? "Update" : "add"}</button>
<div>
<ul>
{tasks.map((task, index) =>(
<li key={index}>
{task}
<button onClick={()=>{setEditingIndex(index);}}>Edit</button>
<button onClick={() => deleteTask(index)}>Delete</button>
</li>
))}
</ul>
</div>
</>
)
}

export default TaskManager