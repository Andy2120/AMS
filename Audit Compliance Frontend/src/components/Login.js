import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("user");
  const [inputs, setInputs] = useState({
    fullName: "",
    password: "",
  });

  const { fullName, password } = inputs;
  const handleType = (event) => {
    event.preventDefault();
    setType("admin");
  };
  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const notify = (msg) =>
    toast(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type == "admin") {
      axios
        .post("https://localhost:7043/api/User/login", inputs)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            notify("Login Successful!!");
            navigate("/user");
          } else {
            notify("Wrong Credentials!!");
            navigate("/login");
          }
        })
        .catch((err) => notify("Wrong Credentials!!"));
    } else {
      axios
        .post("https://localhost:7043/api/User/login", inputs)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            notify("Login Successful!!");
            navigate("/userHome");
          } else {
            notify("Wrong Credentials!!");
            navigate("/login");
          }
        })
        .catch((err) => notify("Wrong Credentials!!"));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="LoginForm">
        <div className="center">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="fullName"
              name="fullName"
              value={fullName}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              required
              onChange={handleChange}
            />
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label " for="exampleRadios1">
              User
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
              onChange={handleType}
            />
            <label class="form-check-label" for="exampleRadios2">
              Admin
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary"
              onChange={handleChange}
            >
              Login
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
