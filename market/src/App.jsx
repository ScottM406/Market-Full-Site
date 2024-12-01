import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";

function App() {

return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element= {<Login />} />
    </Routes>
  </>
)

}

export default App
