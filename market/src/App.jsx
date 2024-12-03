import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";
import Register from "./Register.jsx";
import Products from "./Products.jsx";

const App = () => {

  const [loginToken, setLoginToken] = useState(null);

return (
  <>
    <Navbar loginToken={loginToken}/>
    <Routes>
      <Route path="/" element={<Homepage loginToken={loginToken} />} />
      <Route path="/products" element={<Products loginToken={loginToken}/>} />
      <Route path="/login" element= {<Login setLoginToken={setLoginToken} />} />
      <Route path="/register" element= {<Register />} />
    </Routes>
  </>
)

}

export default App
