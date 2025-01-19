import React from "react";

const LeftSide = () => {
  const userObject = [
    {
      name: "Kunal Arya",
      desc: "Learn from failure",
    },
    {
      name: "Neha Kumari",
      desc: "Working hard for dreams",
    },
    {
      name: "Aarav Mehta",
      desc: "Chasing dreams with passion",
    },
    {
      name: "Diya Sharma",
      desc: "Believe in yourself",
    },
    {
      name: "Rohan Verma",
      desc: "Stay curious, stay inspired",
    },
    {
      name: "Ananya Gupta",
      desc: "Create, inspire, repeat",
    },
    {
      name: "Ishaan Patel",
      desc: "Success through perseverance",
    },
    {
      name: "Priya Kapoor",
      desc: "Grateful for every step",
    },
    {
      name: "Kabir Singh",
      desc: "Adventure fuels the soul",
    },
    {
      name: "Sneha Roy",
      desc: "Dream big, act bigger",
    },
    {
      name: "Vikram Malhotra",
      desc: "Innovate to elevate",
    },
    {
      name: "Aisha Khan",
      desc: "The journey is the reward",
    },
  ];

  return (
    <div className=" h-full w-[25%] bg-slate-900 border-r-2 border-slate-800  ">
      <div className=" h-[10%]  flex items-center justify-center border-b border-slate-800 ">
        <input
          type="text"
          className=" w-[85%] h-[80%] rounded-3xl outline-none p-4 px-7 font-mono  border-slate-600 bg-inherit border text-white  "
        />
      </div>
      <div className=" h-[90%] bg-slate-900 scrollable overflow-y-auto">
        {userObject.map((user) => (
          <>
            <div className=" border-b border-slate-800 flex text-white p-3 items-center justify-satrt gap-6">
              <div className="cursor-pointer h-12 w-12 rounded-[50%] bg-red-500"></div>
              <div className=" hidden lg:block md:block sm:block">
                <h1 className="cursor-pointer font-semibold font-mono">
                  {user.name}
                </h1>
                <h1 className=" font-light text-slate-500">{user.desc}</h1>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
