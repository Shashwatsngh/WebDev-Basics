import React from "react";
import { PiPlusBold } from "react-icons/pi";
import AddTask from "./AddTask";

const AddTaskButton = ({ modalOpen, setModalOpen }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setModalOpen(!modalOpen);
  };
  return (
    <div>
      <button
        className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <PiPlusBold />
      </button>
      {modalOpen && (
        <AddTask modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default AddTaskButton;
