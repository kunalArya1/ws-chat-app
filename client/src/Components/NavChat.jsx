import React from "react";
import { MdVideoCall } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const NavChat = ({ user }) => {
  return (
    <div className=" w-full h-[10%] bg-slate-900 flex p-3 items-center justify-between px-5 border-b border-b-slate-700">
      <div className="flex items-center gap-5 ">
        <div className=" h-12 w-12 rounded-[50%] bg-red-300"></div>
        <h1 className="font-mono text-xl font-bold text-gray-300 ">
          {user.name}
          <span className="block text-sm text-gray-500 ">{user.desc}</span>
        </h1>
        {/* <span className=" block h-3 w-3 mt-1 rounded-[50%] bg-green-500"></span> */}
      </div>
      <div className=" text-gray-300 flex text-2xl items-center justify-between  h-[96%] w-[12%] bg-gray-800 p-3 rounded-md">
        <div className="text-3xl cursor-pointer ">
          <MdVideoCall />
        </div>
        <div className="cursor-pointer ">
          <LuPhoneCall />
        </div>
      </div>
    </div>
  );
};

export default NavChat;
