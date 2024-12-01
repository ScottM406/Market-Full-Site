import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const submitHandler = async (event) => {

    event.preventDefault();

  const postNewCredentials = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      username: username,
      password: password
    }),
  })

  const responseJSON = await postNewCredentials.json();
  const token = responseJSON.token;
  setToken(token);
  }

  return (
    <>
     { token ?
     <h1 id="register-form">Thank you for reqistering! Please <Link to="/login">log in</Link> to continue.</h1> 
     :
      <form id="register-form" onSubmit={submitHandler}>
      <h1>Please Register below to shop online.</h1>
        <input
          placeholder= "username"
          value= {username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          placeholder= "password"
          type= "password"
          value= {password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Register</button>
      </form> }
    </>
  )
}

export default Register;