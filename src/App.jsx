import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";

import Login from "./pages/login";
import Chatroom from "./pages/chatroom";

import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chatroom"
          element={
            <PrivateRoute>
              <Chatroom />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
