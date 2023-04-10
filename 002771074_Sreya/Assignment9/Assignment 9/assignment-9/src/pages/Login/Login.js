import React from "react";
import { renderMatches, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  let [nameError, setnameerror] = useState("");
  let [emailError, setemailError] = useState("");
  let [passwordError, setpasswordError] = useState("");
  let [MessageError, setMessageError] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("handlesubmit");
      if (!validate()) {
        login();
      }
    } catch (err) {
      console.log(err);
    }
  };

  let validate = () => {
    let emailregex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    let passwordregex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/;

    if (email === "" && password === "") {
      console.log("email & password");
      setnameerror("name cannot be blank");
      setemailError("email cannot be blank");
      setpasswordError("password cannot be blank");
      return true;
    } else {
      setnameerror(" ");
      setemailError(" ");
      setpasswordError(" ");
    }

    if (name === "") {
      console.log("name");
      setnameerror("name cannot be blank");
      return true;
    } else {
      setnameerror(" ");
    }

    if (email === "") {
      console.log("email");
      setemailError("email cannot be blank");
      return true;
    } else {
      setemailError(" ");
      if (!emailregex.test(email)) {
        setemailError("please enter valid email");
        return true;
      } else {
        setemailError(" ");
      }
    }
    if (password === "") {
      console.log("password");
      setpasswordError("password cannot be blank");
      console.log(passwordError);
      return true;
    } else {
      setpasswordError(" ");
      console.log("password clear");
      {
        console.log("password total");
        setemailError(" ");
        setpasswordError(" ");
      }
    }
    if (emailError || nameError || passwordError) {
      console.log("clear errors");
      return false;
    }
  };

  let login = () => {
    let item = { name: name, email: email, password: password };
    console.log(item);

    let result = fetch("http://localhost:8080/Logintest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),

      //history.push('/Jobs')
    }).then((res) => {
      result = res.json();
      //console.log(res)
      if (res.statusText === "OK") {
        console.log("OK");
        navigate("/Home");
      } else if (res.status == 401) {
        setpasswordError("Invalid credentials");
        setMessageError(" ");
      } else {
        console.log("Not ok");
        if (!validate()) {
          setMessageError(" User doesn't exist");
          return false;
        } else {
          if (validate()) {
            setMessageError(" ");
            return true;
          }
        }
      }
    });
  };

  return (
    <div id="form">
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h1> Login Page</h1>
          <br></br>
          <input
            type="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {nameError ? <p>{nameError}</p> : null}
          </div>
          <br></br>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {emailError ? <p>{emailError}</p> : null}
          </div>
          <br></br>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {passwordError ? <p>{passwordError}</p> : null}
          </div>

          <br></br>
          <button type="submit">Submit</button>
          <div style={{ fontSize: 12, color: "red" }}>
            {MessageError ? <p>{MessageError}</p> : null}
          </div>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Login;
