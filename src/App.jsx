import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";

import Login from "./pages/login";
import Chatroom from "./pages/chatroom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
    </>
  );
};

export default App;
