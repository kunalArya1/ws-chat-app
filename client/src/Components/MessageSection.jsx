import React, { useContext, useEffect, useRef } from "react";
import { MessageContext } from "../context/MessageContext.jsx";

const MessageSection = () => {
  const { message } = useContext(MessageContext);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the message container every time a new message is added
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [message]);

  return (
    <div
      ref={messageContainerRef}
      className="w-full h-[82%] text-white scrollable overflow-y-auto"
    >
      {message.map((element, index) => {
        // Check if the message starts with "You:" to determine sender
        const isUserMessage = element.startsWith("you :");

        return (
          <div
            key={index}
            className={`flex ${
              isUserMessage ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                isUserMessage
                  ? "bg-slate-900 border-green-700 border text-white"
                  : "bg-slate-900 border-slate-700 border text-white"
              } m-2 p-2 px-4 max-w-[60%] rounded-2xl break-words`}
            >
              {element}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageSection;
