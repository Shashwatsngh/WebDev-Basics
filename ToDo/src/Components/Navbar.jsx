import React from "react";
import { SlCalender } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { BsCalendarDay } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center h-23 w-full  text-white border-b border-neutral-800 bg-slate-900 shadow-md p-4 break-words truncate">
      <h1 className="font-extrabold text-3xl p-10 flex gap-5">
        <FcTodoList className="h-11 w-11" />
        To-Do List
      </h1>

      <div className="align-center flex gap-3 text-l font-semibold mr-12 gap-9">
        <button>
          <RiDeleteBinLine className="h-7 w-7" />
          deleted
        </button>
        <button>
          <BsCalendarDay className="h-7 w-7" />
          Today
        </button>
        <button>
          <FaStar className="h-7 w-7" /> Priority
        </button>
        <button>
          <MdFilterList className="h-7 w-7" /> Status
        </button>
        <button>
          <SlCalender className="h-7 w-7" /> D/W/M
        </button>
        <button>
          <FaTags className="h-7 w-7" />
          Task Group
        </button>
      </div>
    </div>
  );
};

export default Navbar;
