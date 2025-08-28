// InProgress.jsx
import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../Context/TaskContext";
// import { useDroppable } from "@dnd-kit/core";

const InProgress = ({ tasks }) => {
  const { tasks: allTasks } = useContext(TaskContext);
  // const { setNodeRef } = useDroppable({ id: "in-progress" });

  return (
    <div
      // ref={setNodeRef}
      className="flex flex-col items-start justify-start p-2 pt-6 border-gray-300 bg-white w-100 gap-1 break-words truncate rounded-lg"
    >
      <h2 className="text-2xl font-bold text-amber-400 mb-4 pl-3 ">
        In Progress
      </h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          value={task}
          index={allTasks.findIndex((t) => t.id === task.id)}
        />
      ))}
    </div>
  );
};

export default InProgress;
