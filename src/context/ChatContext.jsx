import { createContext, useState, useEffect } from "react";
import {
  addDoc,
  collection,
  query,
  serverTimestamp,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";

import useAuthContext from "../hooks/use-auth-context";

import { db } from "../config/firebase";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const { currentUser } = useAuthContext();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"), // order by createdAt
      limit(50) // limit to 50 messages
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.trim === "") {
      alert("Enter valid message!");
    }

    try {
      const { uid, displayName, photoURL } = currentUser;

      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        uid,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  const valueToShare = {
    value,
    messages,
    handleChange,
    handleSubmit,
  };

  return (
    <ChatContext.Provider value={valueToShare}>{children}</ChatContext.Provider>
  );
};

export { ChatProvider };
export default ChatContext;
