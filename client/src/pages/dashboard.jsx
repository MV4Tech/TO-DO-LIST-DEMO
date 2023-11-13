import React from "react";
import storageService from "../services/storage-service";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => {
        storageService.deleteUserData();
        navigate("/");
      }}>Log out</button>
    </>
  );
};

export default Dashboard;
