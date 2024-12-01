import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";
import Register from "./Register.jsx";

const App = () => {

  const [loginToken, setLoginToken] = useState("");

return (
  <>
    <Navbar loginToken={loginToken}/>
    <Routes>
      <Route path="/" element={<Homepage loginToken={loginToken} />} />
      <Route path="/login" element= {<Login setLoginToken={setLoginToken} />} />
      <Route path="/register" element= {<Register />} />
    </Routes>
  </>
)

}

export default App
