import { useState } from "react";

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
  console.log(responseJSON);

  }

  return (
    <>
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
      </form>
    </>
  )
}

export default Register;