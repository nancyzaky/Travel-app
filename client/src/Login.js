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
    fetch("/login", {
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
      <form onSubmit={handleSub}>
        <label htmlFor="email-login" id="email-login" name="email-login">
          Email:
        </label>
        <input
          value={logInEmail}
          type="text"
          onChange={(e) => {
            setLogInEmail(e.target.value);
          }}
        ></input>

        <label
          htmlFor="password-login"
          id="password-login"
          name="password-login"
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
        <button type="submit">Log In</button>
      </form>
      {alert && <p>{error}</p>}
    </div>
  );
};

export default Login;
