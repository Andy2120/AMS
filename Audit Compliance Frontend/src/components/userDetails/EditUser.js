import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userToEdit = location.state;
  const [inputs, setInputs] = useState({
    id: userToEdit.id,
    fullName: userToEdit.fullName,
    designation: userToEdit.designation,
    password: userToEdit.password,
  });
  const { id, fullName, designation, password } = inputs;

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    axios.put("https://localhost:7043/api/User/", inputs);

    navigate("/user");
  };
  return (
    <div>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">ID</label>

          <input
            type="text"
            name="id"
            value={userToEdit.id}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter User Full Name"
            disabled
            data-testid="id"
            onChange={handleChange}
          />

          <br></br>
        </div>
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
        <br />

        <button
          onChange={handleChange}
          type="submit"
          className="btn btn-primary d-grid gap-2 col-3 mx-auto"
          data-testid="button"
        >
          Update
        </button>
      </form>
      <br></br>
      <br></br>
    </div>
  );
};

export default EditUser;
