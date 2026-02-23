import React from "react";
import { Link } from "react-router-dom";
import "../components/styles.css";
import giyuImage from "../assets/giyu.webp";

const Users = () => {
  return (
    <div className="container">
      <div className="head">
        <Link to="/">Main</Link>
        <Link to="/temperature">Weather</Link>
        <Link to="/users">Users</Link>
      </div>

      <img src={giyuImage} alt="Giyu Tomioka" className="giyu-portrait" />

      <h1>Users Page</h1>
      <p style={{ fontSize: "1.3rem", marginTop: "1.5rem", opacity: 0.9 }}>
        Coming soon – user list with Axios fetch
      </p>
    </div>
  );
};

export default Users;