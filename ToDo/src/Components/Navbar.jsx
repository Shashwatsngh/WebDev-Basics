import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { BsCalendarDay } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navbar = () => {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [status, setStatus] = useState("Status");
  const showDeleted = (e) => {
    e.preventDefault();
    console.log("deleted");
  };

  const filterDate = (e) => {
    e.preventDefault();
    console.log("filterToday");
  };

  const filterStatus = (e) => {
    e.preventDefault();
    console.log("filterStatus");
  };

  const filterTag = (e) => {
    e.preventDefault();
    console.log("filterTag");
  };
  const filterDWM = (e) => {
    e.preventDefault();
    console.log("filterDWM");
  };

  return (
    <div className="sticky top-0 flex justify-between items-center h-30 w-full  text-white border-b border-neutral-800 bg-slate-900 shadow-md p-4 break-words truncate overflow-visible">
      <h1 className="font-extrabold text-3xl p-10 flex gap-5">
        <FcTodoList className="h-11 w-11" />
        To-Do List
      </h1>

        <input type="text" placeholder="Search" className="bg-slate-600 w-60 h-10 rounded p-2 m-4 "/>

      <div className="align-center flex gap-9 text-l font-semibold mr-12 ">
        {/* show deleted tasks */}
        <button
          onClick={(e) => {
            showDeleted(e);
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <RiDeleteBinLine className="h-10 w-10" />
        </button>
        {/* filter by date */}
        <div className="flex flex-col justify-center items-center gap-2">
          <BsCalendarDay className="h-7 w-7 text-white" />
          <DatePicker
            selected={date}
            onChange={(e) => setDate(e)}
            className="bg-slate-600 text-white h-7 rounded w-27 items-center justify-center p-1"
          />
        </div>
        {/* filter by priority */}
        <div className="flex flex-col items-center gap-2">
          <FaStar className="h-7 w-7" />
          <select
            name="priority"
            className="h-7 rounded bg-slate-600 text-white items-center justify-center"
            onChange={(e) => filterPriority(e)}
          >
            <option value="All"  selected>All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        {/* filter by status */}
        <div className="flex flex-col items-center justify-center gap-2">
          <MdFilterList className="h-7 w-7" />
          <select name="status" id="" className="w-27 h-7 rounded bg-slate-600">
            <option value="Status"  selected>Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        {/* filter by DWM */}
        <div className="flex flex-col items-center justify-center gap-2">
          <SlCalender className="h-7 w-7" />
          <select className="w-20 h-7 rounded bg-slate-600">
            <option value="Day" selected>Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div>

        {/* filter by tag */}
        <div className="flex flex-col items-center justify-center gap-2">
          <FaTags className="h-7 w-7" />
          <select name="tag" id="" className="h-7 w-25 rounded bg-slate-600">
            <option value="Tag"  selected>
              Tag
            </option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Home">Home</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
