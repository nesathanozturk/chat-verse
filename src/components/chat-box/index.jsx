import useChatContext from "../../hooks/use-chat-context";

import Message from "../message";

const Chatbox = () => {
  const { messages } = useChatContext();

  return (
    <div className="containerWrapper pb-44 pt-20">
      <Message messages={messages} />
    </div>
  );
};

export default Chatbox;
