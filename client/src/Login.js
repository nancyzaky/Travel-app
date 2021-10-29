import react, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ changeUser }) => {
  const history = useHistory();
  const [logInPassword, setLogInPass] = useState("");
  const [logInEmail, setLogInEmail] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const handleSub = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: logInEmail, password: logInPassword }),
    }).then((resp) => {
      if (resp.ok) {
        setAlert(false);

        resp.json().then((data) => {
          console.log(data);
          changeUser(data);
        });
        history.push("/");
      } else {
        setAlert(true);
        resp.json().then((data) => setError(data.error));
      }
    });
  };
  return (
    <div className="login">
      <h1 className="login-header">Log In</h1>
      <form onSubmit={handleSub} className="log-in">
        <label
          htmlFor="email-login"
          className="label"
          id="email-login"
          name="email-login"
        >
          Email
        </label>

        <input
          value={logInEmail}
          type="text"
          onChange={(e) => {
            setLogInEmail(e.target.value);
          }}
        ></input>
        <br></br>

        <label
          htmlFor="password-login"
          id="password-login"
          name="password-login"
          className="label-email"
        >
          Password
        </label>

        <input
          type="password"
          value={logInPassword}
          onChange={(e) => {
            console.log(e.target.value);
            setLogInPass(e.target.value);
          }}
        ></input>
        <br></br>
        <button
          type="submit"
          className="btn"
          style={{ marginTop: "4rem", marginLeft: "16rem" }}
        >
          Log In
        </button>
      </form>
      {alert && <p>{error}</p>}
    </div>
  );
};

export default Login;
