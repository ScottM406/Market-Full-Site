import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    
    event.preventDefault();
    
    try {

      const postCredentials = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });

      if (!postCredentials.ok) {
        throw new Error();
      }

      const responseJSON = await postCredentials.json();
      console.log(responseJSON);

    } catch (e) {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      <form id="login-form" onSubmit={submitHandler}>
        <h1>Please log in below to shop online and view your existing orders</h1>
        <input
          placeholder= "username"
          value= {username}
          required
          onChange= {(event) => setUsername(event.target.value)}
        />
        <input
          placeholder= "password"
          type= "password"
          value= {password}
          required
          onChange= {(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default Login;