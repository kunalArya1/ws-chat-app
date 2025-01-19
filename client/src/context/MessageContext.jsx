import React, { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
