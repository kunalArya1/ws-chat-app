import React, { useContext, useEffect, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { MessageContext } from "../context/MessageContext";

const MessageInput = () => {
  const [socket, setSocket] = useState(null);
  const { message, setMessage } = useContext(MessageContext);
  const [input, setInput] = useState("");
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (event) => {
      setMessage((prev) => [...prev, `Server: ${event.data}`]);
    };

    ws.onopen = () => {
      console.log("Connectd to the server");
      setMessage((prev) => [...prev, "Connected to the websocket server!  "]);
    };

    ws.onclose = () => {
      console.log("Disconnted from the server");
      setMessage((prev) => [...prev, "Disconnted from the websocket server"]);
    };

    ws.onerror = (error) => {
      console.error("Websocket error: ", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input.trim()) {
      socket.send(input);

      setMessage((prev) => [...prev, `you : ${input}`]);
      console.log(message);

      setInput("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(); // Send message when "Enter" is pressed
    }
  };
  
  return (
    <div className=" w-full h-[8%] flex justify-between border-t-slate-800 border-t">
      <input
        type="text"
        name=""
        id=""
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your message"
        className=" w-[76%] p-3 text-xl font-mono  outline-none text-gray-500 bg-gray-900"
      />
      <button
        onClick={sendMessage}
        className="bg-gray-700 hover:bg-gray-800 hover:transition-all hover:duration-75 w-[10%] h-full rounded-l-lg text-2xl font-mono font-bold text-white text-center px-9  "
      >
        <LuSendHorizontal />
      </button>
    </div>
  );
};

export default MessageInput;
