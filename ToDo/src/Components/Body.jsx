import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import Pending from "./Pending";
import InProgress from "./InProgress";
import Completed from "./Completed";
import AddTask from "./AddTask";

const Body = ({ priority, status, tag, date, deleted }) => {
  const { tasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    // Priority filter
    if (priority !== "" && priority !== "All") {
      if (task.taskPriority !== priority) return false;
    }
    // Status filter
    if (status !== "" && status !== "All") {
      if (task.taskStatus !== status) return false;
    }
    // Tag filter
    if (tag !== "" && tag !== "All") {
      if (task.taskTag !== tag) return false;
    }
    // Date filter
    if (date !== "" && task.startDate !== date) {
      return false;
    }
    return true;
  });

  const pendingTasks = filteredTasks.filter(
    (task) => task.taskStatus === "Pending"
  );
  const inProgressTasks = filteredTasks.filter(
    (task) => task.taskStatus === "In-Progress"
  );
  const completedTasks = filteredTasks.filter(
    (task) => task.taskStatus === "Completed"
  );

  return (
    <div className=" w-full gap-4 p-4 bg-zinc-400 text-gray-900 h-full">
      <div className="flex flex-row gap-4 p-4">
        <Pending tasks={pendingTasks} />
        <InProgress tasks={inProgressTasks} />
        <Completed tasks={completedTasks} />
        <AddTask />
      </div>
    </div>
  );
};

export default Body;
