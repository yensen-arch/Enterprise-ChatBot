import { React, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
const Footer = () => {
  const [showChat, setShowChat] = useState(false);
  console.log(showChat);
  return (
    <div>
      <div className="m-4 border border-gray-500 rounded-3xl mx-4 flex">
        <input
          type="text"
          placeholder="Type or use mic to ask a query..."
          className="p-2 mx-4 w-full outline-none rounded-3xl"
          onFocus={() => setShowChat(true)}
        />
        <button className="ml-2 text-gray-800 rounded-md p-2 transition duration-300">
          <FaMicrophone />
        </button>
      </div>
    </div>
  );
};

export default Footer;
