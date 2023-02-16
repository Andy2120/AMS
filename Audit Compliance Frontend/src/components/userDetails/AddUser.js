import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fullName: "",
    designation: "",
    password: "",
  });
  const { fullName, designation, password } = inputs;

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    axios.post("https://localhost:7043/api/User", inputs);
    navigate("/user");
  };
  return (
    <div>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserName</label>

          <input
            type="text"
            name="fullName"
            value={fullName}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Username"
            required
            data-testid="fullName"
            onChange={handleChange}
          />

          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Designation</label>

          <input
            type="text"
            name="designation"
            value={designation}
            className="form-control"
            placeholder="Enter Designation"
            required
            data-testid="designation"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Enter Password"
            required
            data-testid="password"
            onChange={handleChange}
          />
        </div>

        <div className="pt-4">
          <button
            onChange={handleChange}
            type="submit"
            className="btn btn-primary btn btn-primary d-grid gap-2 col-3 mx-auto"
            data-testid="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
