import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const AddTask = () => {
  const today = new Date().toISOString().split("T")[0];
  const { tasks, setTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDes,
      startDate: start,
      dueDate: due,
      taskPriority: priority,
      taskStatus: status,
      taskTag: tag,
    };
    setTasks([...tasks, newTask]); // <-- This updates state and triggers re-render
    // Optionally clear form fields here
    setTaskName("");
    setTaskDes("");
    setStart(today);
    setDue(today);
    setPriority("Medium");
    setStatus("Pending");
    setTag("General");
  };

  const [taskName, setTaskName] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const [start, setStart] = useState(today);
  const [due, setDue] = useState(today);
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const [tag, setTag] = useState("General");

  return (
    <div className="flex flex-col items-start justify-start p-6 border-gray-300 bg-white w-100 gap-1">
      <h2 className="text-2xl font-bold text-sky-400 mb-4">Add Task</h2>

      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Task name"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task description"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={taskDes}
          onChange={(e) => setTaskDes(e.target.value)}
        />
        <div className="flex flex-col gap-2 mb-1">
          <label htmlFor="startDate" className="text-gray-600 font-medium">
            Start date
          </label>
          <input
            id="startDate"
            type="date"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setStart(e.target.value)}
            value={start}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label htmlFor="dueDate" className="text-gray-600 font-medium">
            Due date
          </label>
          <input
            id="dueDate"
            type="date"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={due}
            min={start}
            onChange={(e) => setDue(e.target.value)}
            required
          />
        </div>
        Status
        <select
          name="status"
          placeholder="Task Status"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="Pending">Pending</option>
          <option value="In-Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        Priority
        <select
          name="priority"
          placeholder="Task Priority"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => setPriority(e.target.value)}
          required
          defaultValue="Medium"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        Tag
        <select
          name="Tag"
          placeholder="Tag"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="General">General</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-sky-400 text-white font-semibold rounded-md hover:bg-sky-600 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
