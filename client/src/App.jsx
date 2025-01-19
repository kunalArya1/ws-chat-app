import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <>
      <div className="h-full w-full flex bg-gray-800">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
