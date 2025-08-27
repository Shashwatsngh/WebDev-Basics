import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TaskContext } from "../Context/TaskContext";

const Task = ({ value, index }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  let priorityColor = "bg-slate-200";
  if (value.taskPriority === "High")
    priorityColor = "bg-red-100 border-red-400";
  else if (value.taskPriority === "Medium")
    priorityColor = "bg-yellow-100 border-yellow-400";
  else if (value.taskPriority === "Low")
    priorityColor = "bg-green-100 border-green-400";

  const handleCheckboxChange = (e) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      taskStatus: e.target.checked ? "Completed" : "Pending",
    };
    setTasks(updatedTasks);
  };

  const deleteTask = () => {
    // Get the task to delete
    const taskToDelete = tasks[index];

    // Remove from tasks array
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Get deletedTasks from localStorage (or empty array)
    const deletedTasks = JSON.parse(
      localStorage.getItem("deletedTasks") || "[]"
    );

    // Add the deleted task
    deletedTasks.push(taskToDelete);

    // Save back to localStorage
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  };
  return (
    <div
      className={`flex flex-row gap-1 p-1 h-12 w-full border rounded-lg justify-between items-center break-words ${priorityColor}`}
    >
      <input
        type="checkbox"
        className="h-6 w-6"
        checked={value.taskStatus === "Completed"}
        onChange={(e) => {
          handleCheckboxChange(e);
        }}
      />
      <h2 className="text-base font-semibold break-words">{value.name}</h2>
      <RiDeleteBinLine
        className="h-6 w-6"
        onClick={(e) => {
          deleteTask();
        }}
      />
    </div>
  );
};

export default Task;
