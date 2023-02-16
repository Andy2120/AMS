import React from "react";
import { Routes, Route } from "react-router-dom";
import SRA from "../auditComponents/SRA";
import { StockManagement } from "../auditComponents/StockManagement";
import Error from "../error/Error";
import AddUser from "../userDetails/AddUser";
import UserDetails from "../userDetails/UserDetails";
import Login from "../Login";
import EditUser from "../userDetails/EditUser";
import UserHome from "../auditComponents/UserHome";
const RootRouter = () => {
  return (
    <div>
      <Routes>
      <Route path="/addUser" element={<AddUser/>}></Route>
      <Route path="/editUser" element={<EditUser/>}></Route>
        <Route path="/user" element={<UserDetails/>}></Route>
        <Route path="/sra" element={<SRA/>}></Route>
        <Route path="/stock" element={<StockManagement/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/userHome" element={<UserHome/>}></Route>
        <Route path="*" element={<Error />}></Route>
        
      </Routes>
    </div>
  );
};

export default RootRouter;
