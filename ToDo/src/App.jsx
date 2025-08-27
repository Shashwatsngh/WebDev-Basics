import React from "react";
import { TaskProvider } from "./Context/TaskContext";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <Body />
    </TaskProvider>
  );
}

export default App;
