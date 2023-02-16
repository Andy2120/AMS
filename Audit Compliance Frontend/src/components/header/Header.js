import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    console.log("navigate: ", location.pathname);
    if (location.pathname === "/login") {
      setShowLogout(false);
    } else {
      setShowLogout(true);
    }
  });
  const [showLogout, setShowLogout] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <img src={require("./logo/p.png")} width="50" height="50" />
          <h1 class="navbar-brand">Audit Compliance Management</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
          <Link to="/login" class="nav-link active" aria-current="page">Login</Link>
        </li> */}
              {/* <li class="nav-item">
          <Link to="/user" class="nav-link active" >UserDetails</Link>
        </li> */}
              {/* <li class="nav-item dropdown">
          <Link to="/" class="nav-link active dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Audit
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/sra" class="dropdown-item" >Perform SRA</Link></li>
            <li><Link to="/stock" class="dropdown-item">Stock Management</Link></li>
          </ul>
        </li> */}
              {/* class="nav-link disabled" */}
            </ul>
            {showLogout && (
              <div class="d-flex  gap-4">
                {/* <button class="btn btn-outline-success" onClick={handleLogout}>Login</button> */}
                <button class="btn btn-outline-success" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
