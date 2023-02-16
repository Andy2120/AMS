import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "react-loading-icons";
const UserDetails = () => {
  useEffect(() => {
    axios.get("https://localhost:7043/api/User").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    axios.delete(`https://localhost:7043/api/User/${id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        axios.get("https://localhost:7043/api/User").then((response) => {
          setUsers(response.data);
          console.log(response.data);
        });
      }
    });
  };

  const handleEdit = (user) => {
    navigate("/editUser", { state: user });
  };

  return (
    <>
      <table className="table App">
        <thead>
          <tr>
            <th scope="col">User_ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Designation</th>
            <th scope="col">Password</th>
            <th scope="col">Delete User</th>
            <th scope="col">Edit User</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr className="App">
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.designation}</td>
              <td>{user.password}</td>

              <td>
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(user);
                  }}
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Link
        to="/addUser"
        className="btn btn-primary btn-sm d-grid gap-2 col-2 mx-auto "
      >
        Add User
      </Link>
    </>
  );
};

export default UserDetails;
