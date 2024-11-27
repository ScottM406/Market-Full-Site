import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form id="login-form">
        <h1>Please log in below to shop online and view your existing orders</h1>
        <input
          placeholder= "email"
          type= "email"
          value= {email}
          required
          onChange= {(event) => setEmail(event.target.value)}
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