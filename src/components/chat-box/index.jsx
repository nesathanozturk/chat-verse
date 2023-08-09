import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";

import Message from "../message";

import { db } from "../../config/firebase";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="containerWrapper pb-44 pt-20">
      <Message messages={messages} />
    </div>
  );
};

export default Chatbox;
