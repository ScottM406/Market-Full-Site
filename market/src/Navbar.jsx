import { Link } from "react-router-dom";

const Navbar = ( { loginToken } ) => {
  return (
    <header>
      {loginToken ? null : <Link to={"/login"}>Log In</Link>}
      {loginToken ? null : <Link to={"/register"}>Register</Link>}
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Our Products</Link>
    </header>
  )
}

export default Navbar;