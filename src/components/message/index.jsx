const Message = ({ messages }) => {
  const renderedMessages = messages.map((message) => (
    <div key={message.id}>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="
            https://avatars.githubusercontent.com/u/107864503?v=4"
              alt={message.name}
            />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  ));

  return renderedMessages;
};

export default Message;
