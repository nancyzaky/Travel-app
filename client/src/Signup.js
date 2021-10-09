import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [email, setEmail] = useState("");
  const [wrongPass, setWrongPass] = useState(false);
  const [errors, setErrors] = useState([]);
  const [error, setError] = useState(false);
  const handleSub = (e) => {
    e.preventDefault();
    if (parseInt(password) !== parseInt(passwordC)) {
      setWrongPass(true);
      return;
    }
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: setPasswordC,
        email,
      }),
    }).then((resp) => {
      if (resp.ok) {
        setError(true);
        resp.json().then((d) => {
          console.log(d);
          setWrongPass(false);
          setName("");
          setEmail("");
          setPassword("");
          setPasswordC("");
          history.push("/login");
        });
      } else {
        setError(true);
        resp.json().then((d) => setErrors(d.errors));
      }
    });
  };

  return (
    <>
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSub}>
          <label htmlFor="name" name="name" id="name">
            Name:
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <label htmlFor="password" name="password" id="password">
            password:
          </label>
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <label
            htmlFor="password_confirm"
            name="password_confirm"
            id="password_confirm"
          >
            confirm_password:
          </label>
          <input
            value={passwordC}
            type="password"
            onChange={(e) => {
              setPasswordC(e.target.value);
            }}
          ></input>
          <label htmlFor="email" name="email" id="email">
            Email:
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {wrongPass && <p>Passwords don't match, please try again</p>}
      </div>
      {error && (
        <div>
          {errors.map((error) => {
            return <h3>{error}</h3>;
          })}
        </div>
      )}
    </>
  );
};

export default Signup;
