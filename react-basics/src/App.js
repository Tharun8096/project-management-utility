import React, { useState } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");

  const addTask = () => {
    if (!taskName || !user) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      taskName,
      user,
      status,
      priority,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setUser("");
    setStatus("To Do");
    setPriority("Medium");
  };

 

  return (
    <div style={{ padding: "20px" }}>
      <h3>Total Tasks: {tasks.length}</h3>

<h4>
  To Do: {tasks.filter(task => task.status === "To Do").length}
</h4>

<h4>
  In Progress: {tasks.filter(task => task.status === "In Progress").length}
</h4>

<h4>
  Testing: {tasks.filter(task => task.status === "Testing").length}
</h4>

<h4>
  Done: {tasks.filter(task => task.status === "Done").length}
</h4>

      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Assigned User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Testing</option>
        <option>Done</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        onClick={addTask}
        style={{ marginLeft: "10px" }}
      >
        Add Task
      </button>

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Assigned User</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
  {tasks.map((task, index) => (
    <tr key={index}>
      <td>{task.taskName}</td>
      <td>{task.user}</td>
      <td
  style={{
    color:
      task.status === "Done"
        ? "green"
        : task.status === "In Progress"
        ? "blue"
        : task.status === "Testing"
        ? "orange"
        : "red",
    fontWeight: "bold",
  }}
>
  {task.status}
</td>
      <td>{task.priority}</td>

      <td>
  <button
    onClick={() => {
      const newName = prompt("Enter new task name");

      if (newName) {
        const updatedTasks = [...tasks];
        updatedTasks[index].taskName = newName;
        setTasks(updatedTasks);
      }
    }}
  >
    Edit
  </button>

 <button
  onClick={() => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }}
>
  Delete
</button>
</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default App;