import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import Pending from "./Pending";
import InProgress from "./InProgress";
import Completed from "./Completed";
import AddTask from "./AddTask";
import { SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";

const Body = ({
  priority,
  status,
  tag,
  date,
  deleted,
  search,
  setMobileMenuOpen,
}) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { deletedTasks } = useContext(TaskContext);

  // drag and drop
  // const handleDragEnd = (event) => {
  //   console.log(event);
  //   if (!event || !event.active || !event.over) return;
  //   const { active, over } = event;

  //   // Map bucket ids to status values
  //   const bucketStatusMap = {
  //     pending: "Pending",
  //     "in-progress": "In-Progress",
  //     completed: "Completed",
  //   };

  //   // If dropped over a bucket (not a task)
  //   if (bucketStatusMap[over.id]) {
  //     const updatedTasks = tasks.map((task) => {
  //       if (task.id === active.id) {
  //         return { ...task, taskStatus: bucketStatusMap[over.id] };
  //       }
  //       return task;
  //     });
  //     setTasks(updatedTasks);
  //     return;
  //   }

  //   // If dropped over another task
  //   const activeTask = tasks.find((task) => task.id === active.id);
  //   const overTask = tasks.find((task) => task.id === over.id);
  //   if (!activeTask || !overTask) return;

  //   // If dropped over a task in a different bucket, move and reorder
  //   if (activeTask.taskStatus !== overTask.taskStatus) {
  //     const updatedTasks = tasks.map((task) => {
  //       if (task.id === active.id) {
  //         return { ...task, taskStatus: overTask.taskStatus };
  //       }
  //       return task;
  //     });
  //     setTasks(updatedTasks);
  //     return;
  //   }

  //   // Only reorder if both tasks are in the same bucket
  //   const bucketTasks = tasks.filter(
  //     (task) => task.taskStatus === activeTask.taskStatus
  //   );
  //   const otherTasks = tasks.filter(
  //     (task) => task.taskStatus !== activeTask.taskStatus
  //   );
  //   const oldIndex = bucketTasks.findIndex((task) => task.id === active.id);
  //   const newIndex = bucketTasks.findIndex((task) => task.id === over.id);
  //   const reordered = [...bucketTasks];
  //   const [moved] = reordered.splice(oldIndex, 1);
  //   reordered.splice(newIndex, 0, moved);
  //   const finalTasks = [...otherTasks, ...reordered];
  //   setTasks(finalTasks);
  // };
  let storedTasks;
  if (deleted) {
    storedTasks = deletedTasks;
  } else {
    storedTasks = tasks;
  }
  const filteredTasks = storedTasks.filter((task) => {
    // Search filter
    if (search !== "") {
      if (!task.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
    }
    // Priority filter
    if (priority !== "All") {
      if (task.taskPriority !== priority) return false;
    }
    // Status filter
    if (status !== "All") {
      if (task.taskStatus !== status) return false;
    }
    // Tag filter
    if (tag !== "All") {
      if (task.taskTag !== tag) return false;
    }
    // Date filter
    if (task.startDate !== date) {
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
    <div
      className=" w-full gap-4 p-4 bg-zinc-400 text-gray-900 h-full min-h-screen
    "
      onClick={() => setMobileMenuOpen(false)}
    >
      {/* Desktop */}
      <div className="hidden lg:flex flex-row gap-4 p-4">
        {/* <DndContext onDragEnd={handleDragEnd}>
          <SortableContext
            id="pending"
            items={pendingTasks.map((task) => task.id)}
          > */}
        <Pending tasks={pendingTasks} />
        {/* </SortableContext>
          <SortableContext
            id="in-progress"
            items={inProgressTasks.map((task) => task.id)}
          > */}
        <InProgress tasks={inProgressTasks} />
        {/* </SortableContext>
          <SortableContext
            id="completed"
            items={completedTasks.map((task) => task.id)}
          > */}
        <Completed tasks={completedTasks} />
        {/* </SortableContext>
        </DndContext> */}
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-wrap gap-4 p-4">
        {/* <DndContext onDragEnd={handleDragEnd}>
          <SortableContext
            id="pending"
            items={pendingTasks.map((task) => task.id)}
          > */}
        <Pending tasks={pendingTasks} />
        {/* </SortableContext>
          <SortableContext
            id="in-progress"
            items={inProgressTasks.map((task) => task.id)}
          > */}
        <InProgress tasks={inProgressTasks} />
        {/* </SortableContext>
          <SortableContext
            id="completed"
            items={completedTasks.map((task) => task.id)}
          > */}
        <Completed tasks={completedTasks} />
        {/* </SortableContext>
        </DndContext> */}
      </div>
    </div>
  );
};

export default Body;
