import React from "react";
import NavChat from "./NavChat";
import MessageSection from "./MessageSection";
import MessageInput from "./MessageInput";

const RightSide = () => {
  return (
    <div className=" h-full w-[75%] bg-gray-900">
      <NavChat />
      <MessageSection />
      <MessageInput />
    </div>
  );
};

export default RightSide;
