import React from "react";
import NavChat from "./NavChat";
import MessageSection from "./MessageSection";
import MessageInput from "./MessageInput";
import { useParams } from "react-router-dom";

const RightSide = () => {
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

  const user = userObject.find((u) => u.id === parseInt(id));
  return (
    <div className=" h-full w-[75%] bg-gray-900">
      <NavChat user={user} />
      <MessageSection />
      <MessageInput />
    </div>
  );
};

export default RightSide;
