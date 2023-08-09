import { useEffect, useRef } from "react";

import Message from "../message";

import useChatContext from "../../hooks/use-chat-context";

const Chatbox = () => {
  const { messages } = useChatContext();

  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" }); // focus on last message
  };

  useEffect(() => scrollToBottom, [messages]);

  return (
    <div className="containerWrapper pb-44 pt-20">
      <Message messages={messages} />
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Chatbox;
