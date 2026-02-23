import { Link } from "react-router-dom";
import "../components/styles.css";
import giyuImage from "../assets/img.avif"; 

function Master() {
  return (
    <div className="container">
      <div className="head">
        <Link to="/">Main</Link>
        <Link to="/temperature">Weather</Link>
        <Link to="/users">Users</Link>
      </div>

      <img src={giyuImage} alt="Giyu Tomioka" className="giyu-portrait" />

      <h1>Welcome</h1>
      <p style={{ fontSize: "1.3rem", marginTop: "1rem", opacity: 0.9 }}>
            Welcome, this is the Master Page of our React Application. Use the navigation links above to explore different sections of the app. Enjoy your stay!
      </p>
    </div>
  );
}

export default Master;