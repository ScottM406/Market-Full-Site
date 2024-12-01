import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to={"/login"}>Log In</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/"}>Home</Link>
    </header>
  )
}

export default Navbar;