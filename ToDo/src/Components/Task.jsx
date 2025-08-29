import React, { useContext, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TaskContext } from "../Context/TaskContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ value, index }) => {
  // const { attributes, listeners, setNodeRef, transform, transition } =
  //   useSortable({ id: value.id });
  const { tasks, setTasks, deletedTasks, setDeletedTasks } =
    useContext(TaskContext);

  const [isClicked, setIsClicked] = useState(false);

  let priorityColor = "bg-slate-200";
  if (isClicked === true) {
    priorityColor = "bg-slate-100";
  } else if (value.taskPriority === "High")
    priorityColor = "bg-red-100 border-red-400";
  else if (value.taskPriority === "Medium")
    priorityColor = "bg-yellow-100 border-yellow-400";
  else if (value.taskPriority === "Low")
    priorityColor = "bg-green-100 border-green-400";

  const handleCheckboxChange = (e) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === value.id) {
        return {
          ...task,
          taskStatus: e.target.checked ? "Completed" : "Pending",
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (e) => {
    // Find the task to delete by ID instead of index
    const taskToDelete = tasks.find((task) => task.id === value.id);

    if (!taskToDelete) return; // Safety check

    // Remove from tasks array using ID
    const updatedTasks = tasks.filter((task) => task.id !== value.id);
    setTasks(updatedTasks);

    // Add to deleted tasks using context
    const updatedDeletedTasks = [...deletedTasks, taskToDelete];
    setDeletedTasks(updatedDeletedTasks);
  };
  return (
    <div
      className={`flex flex-col h-auto w-full border rounded-lg gap-2 p-2 ${priorityColor} transition-all duration-500 ease-in-out whitespace-pre-line`}
      // colour change and expand
      onClick={() => setIsClicked(!isClicked)}
      // drag and drop
      // ref={setNodeRef}
      // {...attributes}
      // {...listeners}
      // style={{
      //   transform: CSS.Transform.toString(transform),
      //   transition: transition,
      // }}
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
        <h2 className="text-base font-semibold break-words w-full">
          {value.name}
        </h2>
        <RiDeleteBinLine
          className="h-6 w-6 "
          onClick={(e) => {
            deleteTask(e);
          }}
        />
      </div>

      {isClicked && (
        <div className="break-words w-full $(isClicked ? 'max-h-100' : 'max-h-0') whitespace-pre-line overflow-hidden transition-all duration-1000 ease-in-out">
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
