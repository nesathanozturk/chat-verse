import useChatContext from "../../hooks/use-chat-context";

import Message from "../message";

const Chatbox = () => {
  const { messages, messagesEndRef } = useChatContext();

  return (
    <div className="containerWrapper pb-44 pt-20">
      <Message messages={messages} />
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Chatbox;
