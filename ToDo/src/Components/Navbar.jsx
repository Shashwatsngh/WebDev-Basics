import React, { useState, useRef, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { BsCalendarDay } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for search inputs
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Global keydown listener for auto-focus
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if user is typing (not using special keys)
      const isTyping =
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        event.key.length === 1 &&
        event.key.match(/[a-zA-Z0-9\s]/);

      // Check if user is not already focused on an input/textarea/select
      const activeElement = document.activeElement;
      const isInputFocused =
        activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA" ||
        activeElement.tagName === "SELECT";

      if (isTyping && !isInputFocused) {
        // Focus appropriate search input based on screen size
        const isMobile = window.innerWidth < 1024;

        if (isMobile && mobileSearchRef.current) {
          mobileSearchRef.current.focus();
          // Add the typed character to search
          setSearch(event.key);
        } else if (!isMobile && desktopSearchRef.current) {
          desktopSearchRef.current.focus();
          // Add the typed character to search
          setSearch(event.key);
        }
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSearch]);

  return (
    <div className="sticky top-0 w-full text-white border-b border-neutral-800 bg-slate-900 shadow-md">
      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-between items-center h-auto p-5">
        {/* Logo */}
        <h1 className="font-extrabold text-[5vmin] flex gap-2">
          <FcTodoList className="h-auto w-auto" />
          To-Do List
        </h1>

        {/* Search */}
        <input
          ref={desktopSearchRef}
          type="text"
          placeholder="Search"
          className="autofocus bg-slate-600 w-auto m-2 h-auto rounded p-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="align-center flex gap-9 text-l font-semibold mr-12">
          {/* show deleted tasks */}
          <button
            onClick={(e) => {
              setDeleted(!deleted);
            }}
            className="flex flex-col justify-center items-center gap-2 h-auto w-auto"
          >
            <RiDeleteBinLine className="h-7 w-7" />
            {deleted ? "Show Tasks" : "Show Deleted"}
          </button>

          {/* filter by date */}
          <div className="flex flex-col justify-center items-center gap-2">
            <BsCalendarDay className="h-7 w-7 text-white" />
            <DatePicker
              selected={date ? new Date(date) : null}
              onChange={(date) => setDate(date.toISOString().split("T")[0])}
              className="bg-slate-600 text-white h-7 rounded w-[7vmax] items-center justify-center p-1"
              popperClassName="z-50"
              portalId="root"
            />
          </div>

          {/* filter by priority */}
          <div className="flex flex-col items-center gap-2">
            <FaStar className="h-7 w-7" />
            <select
              name="priority"
              className="h-7 w-auto rounded bg-slate-600 text-white items-center justify-center p-1"
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
              className="w-auto h-7 rounded bg-slate-600 text-white items-center justify-center p-1"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>

          {/* filter by tag */}
          <div className="flex flex-col items-center justify-center gap-2">
            <FaTags className="h-7 w-7" />
            <select
              name="tag"
              id=""
              className="h-7 w-auto rounded bg-slate-600 text-white items-center justify-center p-1"
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

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="font-extrabold text-xl flex gap-3 items-center">
            <FcTodoList className="h-8 w-8" />
            To-Do List
          </h1>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-4">
          <input
            ref={mobileSearchRef}
            type="text"
            placeholder="Search (or just start typing)"
            className="bg-slate-600 w-full h-10 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-slate-800 border-t border-neutral-700 p-4 space-y-4">
            <strong>Filters</strong>
            <br />
            <br />
            {/* show deleted tasks */}
            <div className="flex items-center gap-3 w-auto p-2 rounded">
              <RiDeleteBinLine className="h-6 w-6" />
              <button
                onClick={(e) => {
                  setDeleted(!deleted);
                }}
                className="w-auto p-2 bg-slate-700 hover:bg-slate-600"
              >
                {deleted ? "Show Tasks" : "Show Deleted"}
              </button>
            </div>

            {/* filter by date */}
            <div className="flex items-center gap-3 p-2">
              <BsCalendarDay className="h-6 w-6 text-white" />
              <DatePicker
                selected={date ? new Date(date) : null}
                onChange={(date) => setDate(date.toISOString().split("T")[0])}
                className="bg-slate-600 text-white h-auto rounded p-2 w-[15vmax]"
                portalId="root"
              />
            </div>

            {/* filter by priority */}
            <div className="flex items-center gap-3 p-2">
              <FaStar className="h-6 w-6" />
              <select
                name="priority"
                className="h-auto rounded bg-slate-600 text-white p-2 w-auto"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="All">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* filter by status */}
            <div className="flex items-center gap-3 p-2">
              <MdFilterList className="h-6 w-6" />
              <select
                name="status"
                className="h-auto rounded bg-slate-600 text-white p-2 w-auto"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>

            {/* filter by tag */}
            <div className="flex items-center gap-3 p-2">
              <FaTags className="h-6 w-6" />
              <select
                name="tag"
                className="h-auto rounded bg-slate-600 text-white p-2 w-auto"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              >
                <option value="All">All Tags</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Home">Home</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
