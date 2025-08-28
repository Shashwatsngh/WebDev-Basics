import React, { useState } from "react";
import { TaskProvider } from "./Context/TaskContext";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";

function App()
{
  
  const today = new Date().toISOString().split("T")[0];
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [tag, setTag] = useState("All");
  const [date, setDate] = useState(today);
  const [DWM, setDWM] = useState("Day");
  const [deleted, setDeleted] = useState(false);
  return (
    <TaskProvider>
      <Navbar
        priority={priority}
        setPriority={setPriority}
        status={status}
        setStatus={setStatus}
        tag={tag}
        setTag={setTag}
        date={date}
        setDate={setDate}
        deleted={deleted}
        setDeleted={setDeleted}
        search={search}
        setSearch={setSearch}
      />
      <Body
        priority={priority}
        status={status}
        tag={tag}
        date={date}
        deleted={deleted}
        search={search}
      />
    </TaskProvider>
  );
}

export default App;
