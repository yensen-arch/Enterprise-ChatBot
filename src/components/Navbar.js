import React from "react";
import {FaBook} from "react-icons/fa";

const navbar = () => {
  return (
    <div className="h-16 bg-blue-600 w-full">
      <div className="flex justify-between h-16 px-4">
        <img
          src="	https://dmrc.corover.ai/assets/chetna-en.png"
          className="h-14 mx-4 pt-2"
        ></img>
        <button ><FaBook size={24} color="white"/></button>
      </div>
    </div>
  );
};

export default navbar;
