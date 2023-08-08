import Message from "../message";

const Chatbox = () => {
  const messages = [
    {
      id: 1,
      name: "Nesathan",
      text: "Hello there!",
    },
    {
      id: 2,
      name: "Mark",
      text: "Hi!",
    },
  ];

  return (
    <div className="containerWrapper pb-44 pt-20">
      <Message messages={messages} />
    </div>
  );
};

export default Chatbox;
