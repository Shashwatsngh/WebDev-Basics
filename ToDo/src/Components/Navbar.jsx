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

const Navbar = ({
  priority,
  setPriority,
  status,
  setStatus,
  tag,
  setTag,
  date,
  setDate,
  deleted,
  setDeleted,
  search,
  setSearch,
}) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="sticky top-0 flex justify-between items-center h-30 w-full  text-white border-b border-neutral-800 bg-slate-900 shadow-md p-4 break-words truncate relative">
      <h1 className="font-extrabold text-3xl p-10 flex gap-5">
        <FcTodoList className="h-11 w-11" />
        To-Do List
      </h1>

      <input
        type="text"
        placeholder="Search"
        className="bg-slate-600 w-full h-10 rounded p-2 ml-8 mr-25 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="align-center flex gap-9 text-l font-semibold mr-12 ">
        {/* show deleted tasks */}
        <button
          onClick={(e) => {
            setDeleted(!deleted);
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <RiDeleteBinLine className="h-10 w-10" />
          {deleted ? "Show Tasks" : "Show Deleted"}
        </button>

        {/* filter by date */}
        <div className="flex flex-col justify-center items-center gap-2 z-10">
          <BsCalendarDay className="h-7 w-7 text-white" />
          <DatePicker
            selected={date ? new Date(date) : null}
            onChange={(date) => setDate(date.toISOString().split("T")[0])}
            className="bg-slate-600 text-white h-7 rounded w-27 items-center justify-center p-1"
            popperClassName="z-50"
            portalId="root"
          />
        </div>

        {/* filter by priority */}
        <div className="flex flex-col items-center gap-2">
          <FaStar className="h-7 w-7" />
          <select
            name="priority"
            className="h-7 rounded bg-slate-600 text-white items-center justify-center p-1"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* filter by status */}
        <div className="flex flex-col items-center justify-center gap-2">
          <MdFilterList className="h-7 w-7" />
          <select
            name="status"
            id=""
            className="w-27 h-7 rounded bg-slate-600 text-white items-center justify-center p-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        {/* filter by DWM
        <div className="flex flex-col items-center justify-center gap-2">
          <SlCalender className="h-7 w-7" />
          <select
            className="w-20 h-7 rounded bg-slate-600"
            value={DWM}
            onChange={(e) => setDWM(e.target.value)}
          >
            <option value="Day" selected>
              Day
            </option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div> */}

        {/* filter by tag */}
        <div className="flex flex-col items-center justify-center gap-2">
          <FaTags className="h-7 w-7" />
          <select
            name="tag"
            id=""
            className="h-7 w-25 rounded bg-slate-600 text-white items-center justify-center p-1"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="All">All</option>
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
