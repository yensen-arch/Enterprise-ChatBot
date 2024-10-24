import React from "react";
import {
  FaArrowRight,
  FaDollarSign,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaHeadset,
  FaQuestionCircle,
  FaMicrophone,
} from "react-icons/fa";

const buttons = [
  {
    label: "Journey Planner",
    icon: <FaArrowRight />,
    bg: "bg-blue-400",
    hoverBg: "hover:bg-blue-500",
  },
  {
    label: "Calculate Fare",
    icon: <FaDollarSign />,
    bg: "bg-green-400",
    hoverBg: "hover:bg-green-500",
  },
  {
    label: "Station Details",
    icon: <FaMapMarkerAlt />,
    bg: "bg-yellow-400",
    hoverBg: "hover:bg-yellow-500",
  },
  {
    label: "Service Status",
    icon: <FaInfoCircle />,
    bg: "bg-blue-400",
    hoverBg: "hover:bg-blue-500",
  },
  {
    label: "First & Last Metro",
    icon: <FaArrowRight />,
    bg: "bg-purple-400",
    hoverBg: "hover:bg-purple-500",
  },
  {
    label: "DMRC Helpline",
    icon: <FaHeadset />,
    bg: "bg-green-400",
    hoverBg: "hover:bg-green-500",
  },
];

const Cardgroup = () => {
  return (
    <div className="bg-white rounded-lg shadow-md transition duration-300 ">
      <button className="justify-center flex my-4 p-4 rounded-3xl w-full bg-blue-200 items-center">
        <h2 className="text-xl font-semibold">Book Your Tickets Online</h2>
        <span className="text-blue-500 p-2 hover:text-blue-700">
          <FaArrowRight />
        </span>
      </button>
      <div className="grid grid-cols-2 gap-4 ">
        {buttons.map(({ label, icon, bg, hoverBg }, index) => (
          <button
            key={index}
            className={`${bg} ${hoverBg} text-black rounded-3xl py-4 px-4 justify-center flex mx-4 transition duration-300`}
          >
            <div className="flex items-center">
              {icon}
              <span className="ml-2">{label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button className="flex p-4 rounded-3xl bg-pink-100 w-full justify-center">
          <h2 className="text-xl font-semibold">About DMRC</h2>
          <span className="text-blue-500 p-2 hover:text-blue-700">
            <FaArrowRight />
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default Cardgroup;
