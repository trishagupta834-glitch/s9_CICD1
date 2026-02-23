import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/styles.css";
import giyuImage from "../assets/img.avif";

const Temperature = () => {
  const [temp, setTemp] = useState(null);
  const [message, setMessage] = useState(() => localStorage.getItem("msg") || "");

  const fetchTempForCity = async (city) => {
    if (!city.trim()) return;
    try {
      const geocode = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
        params: { name: city, count: 1 },
      });
      const result = geocode.data.results?.[0];
      if (!result) {
        alert("City not found");
        return;
      }
      const { latitude, longitude } = result;
      const weather = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: { latitude, longitude, current_weather: true },
      });
      setTemp(weather.data.current_weather.temperature);
    } catch (err) {
      console.error(err);
      alert("Error fetching weather data");
    }
  };

  const handleBtnclick = () => {
    if (!message.trim()) return alert("Please enter a city name");
    localStorage.setItem("msg", message);
    fetchTempForCity(message);
  };

  useEffect(() => {
    fetchTempForCity("Bettiah");
  }, []);

  return (
    <div className="container">
      <div className="head">
        <Link to="/">Main</Link>
        <Link to="/temperature">Weather</Link>
        <Link to="/users">Users</Link>
      </div>

      <img src={giyuImage} alt="Giyu Tomioka" className="giyu-portrait" />

      <input
        type="text"
        placeholder="Enter city name..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          localStorage.setItem("msg", e.target.value);
        }}
      />

      <button onClick={handleBtnclick} className="glass-btn">
        Get Temperature
      </button>

      <h1>
        {temp !== null ? `${temp} °C` : "Loading temperature..."}
      </h1>
    </div>
  );
};

export default Temperature;