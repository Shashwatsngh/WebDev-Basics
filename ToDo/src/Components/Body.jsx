import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import Pending from "./Pending";
import InProgress from "./InProgress";
import Completed from "./Completed";
import AddTask from "./AddTask";

const Body = () => {
  const { tasks } = useContext(TaskContext);

  const pendingTasks = tasks.filter((task) => task.taskStatus === "Pending");
  const inProgressTasks = tasks.filter(
    (task) => task.taskStatus === "In-Progress"
  );
  const completedTasks = tasks.filter(
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
