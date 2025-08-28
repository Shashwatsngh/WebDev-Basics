import React, { useContext, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TaskContext } from "../Context/TaskContext";

const Task = ({ value, index }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [isHovered, setIsHovered] = useState(false);

  let priorityColor = "bg-slate-200";
  if (isHovered === true) {
    priorityColor = "bg-slate-100";
  } else if (value.taskPriority === "High")
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
      className={`flex flex-col h-auto w-full border rounded-lg gap-2 p-2 ${priorityColor} transition-all duration-500 ease-in-out whitespace-pre-line`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row gap-3 p-2 justify-between items-center">
        <input
          type="checkbox"
          className="h-6 w-6 "
          checked={value.taskStatus === "Completed"}
          onChange={(e) => {
            handleCheckboxChange(e);
          }}
        />
        <h2 className="text-base font-semibold break-words w-full">{value.name}</h2>
        <RiDeleteBinLine
          className="h-6 w-6 "
          onClick={(e) => {
            deleteTask();
          }}
        />
      </div>

      {isHovered && (
        <div className="break-words w-full $(isHovered ? 'max-h-100' : 'max-h-0') whitespace-pre-line overflow-hidden transition-all duration-1000 ease-in-out">
          <h4 className="font-bold">Description:</h4> {value.description}
          <br />
          <h4 className="font-bold">Tag:</h4> {value.taskTag}
          <br />
          <h4 className="font-bold">Created At:</h4> {value.startDate}
          <br />
          <h4 className="font-bold">Due Date:</h4> {value.dueDate}
          <br />
          <h4 className="font-bold">Priority:</h4> {value.taskPriority}
        </div>
      )}
    </div>
  );
};

export default Task;
