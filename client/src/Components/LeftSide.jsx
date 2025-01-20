import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const LeftSide = () => {
  const { id } = useParams();
  const userObject = [
    {
      id: 1,
      name: "Kunal Arya",
      desc: "Learn from failure",
    },
    {
      id: 2,
      name: "Neha Kumari",
      desc: "Working hard for dreams",
    },
    {
      id: 3,
      name: "Aarav Mehta",
      desc: "Chasing dreams with passion",
    },
    {
      id: 4,
      name: "Diya Sharma",
      desc: "Believe in yourself",
    },
    {
      id: 5,
      name: "Rohan Verma",
      desc: "Stay curious, stay inspired",
    },
    {
      id: 6,
      name: "Ananya Gupta",
      desc: "Create, inspire, repeat",
    },
    {
      id: 7,
      name: "Ishaan Patel",
      desc: "Success through perseverance",
    },
    {
      id: 8,
      name: "Priya Kapoor",
      desc: "Grateful for every step",
    },
    {
      id: 9,
      name: "Kabir Singh",
      desc: "Adventure fuels the soul",
    },
    {
      id: 10,
      name: "Sneha Roy",
      desc: "Dream big, act bigger",
    },
    {
      id: 11,
      name: "Vikram Malhotra",
      desc: "Innovate to elevate",
    },
    {
      id: 12,
      name: "Aisha Khan",
      desc: "The journey is the reward",
    },
  ];

  return (
    <>
      {/* <div className=" h-full w-[25%] bg-slate-900 border-r-2 border-slate-800  ">
        <div className=" h-[10%]  flex items-center justify-center border-b border-slate-800 ">
          <input
            type="text"
            className=" w-[85%] h-[80%] rounded-3xl outline-none p-4 px-7 font-mono  border-slate-600 bg-inherit border text-white  "
          />
        </div>
        <div className=" h-[90%] bg-slate-900 scrollable overflow-y-auto">
          {userObject.map((user) => (
            <>
              <Link to={`/profile/${user.id}`}>
                <div
                  key={user.name}
                  className="flex items-center gap-6 p-3 text-white border-b border-slate-800 justify-satrt"
                >
                  <div className="cursor-pointer h-12 w-12 rounded-[50%] bg-red-500"></div>
                  <div className="hidden lg:block md:block sm:block">
                    <h1 className="font-mono font-semibold cursor-pointer">
                      {user.name}
                    </h1>
                    <h1 className="font-light text-slate-500">{user.desc}</h1>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div> */}

      <div className="flex h-full">
        {/* Left side panel */}
        <div
          className={`${
            id ? "w-[25%]" : "w-[25%]"
          } h-full bg-slate-900 border-r-2 border-slate-800`}
        >
          <div className="h-[10%] flex items-center justify-center border-b border-slate-800">
            <input
              type="text"
              className="w-[85%] h-[80%] rounded-3xl outline-none p-4 px-7 font-mono border-slate-600 bg-inherit border text-white"
            />
          </div>
          <div className="h-[90%] bg-slate-900 scrollable overflow-y-auto">
            {userObject.map((user) => (
              <Link key={user.id} to={`/profile/${user.id}`}>
                <div className="flex items-center gap-6 p-3 text-white border-b border-slate-800">
                  <div className="cursor-pointer h-12 w-12 rounded-[50%] bg-red-500"></div>
                  <div className="hidden lg:block md:block sm:block">
                    <h1 className="font-mono font-semibold cursor-pointer">
                      {user.name}
                    </h1>
                    <h1 className="font-light text-slate-500">{user.desc}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Conditionally render right side */}
        {id && <Outlet />}
      </div>
    </>
  );
};

export default LeftSide;
