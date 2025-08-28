import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(stored);
  }, []);

  // Load deleted tasks from localStorage on mount
  useEffect(() => {
    const storedDeleted = JSON.parse(
      localStorage.getItem("deletedTasks") || "[]"
    );
    setDeletedTasks(storedDeleted);
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save deleted tasks to localStorage when deletedTasks change
  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, deletedTasks, setDeletedTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};
