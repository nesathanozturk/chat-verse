import useAuthContext from "../../hooks/use-auth-context";

const Message = ({ messages }) => {
  const { currentUser } = useAuthContext();

  const renderedMessages = messages?.map((message) => {
    const messageClass = `chat ${
      message.uid === currentUser.uid ? "chat-end" : "chat-start"
    }`;

    return (
      <div key={message?.id}>
        <div className={messageClass}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message?.avatar} alt={message?.name} />
            </div>
          </div>
          <div className="chat-header">{message?.name}</div>
          <div className="chat-bubble">{message?.text}</div>
        </div>
      </div>
    );
  });

  return renderedMessages;
};

export default Message;
