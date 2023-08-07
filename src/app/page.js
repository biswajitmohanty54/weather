"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Weather from "../../Component/Weather";
import Spinner from "../../Component/Spinner";

export default function Home() {
  const [city, setCity] = useState(0);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      //console.log(response.data);
    });
    setCity(0);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="container py-5">
          <div className="d-flex justify-content-between">
            <h2>Weather Forecast</h2>
            <form onSubmit={fetchWeather} style={{ width: "20rem" }}>
              <div className="row">
                <div className="input-group">
                  <input onChange={(e) => setCity(e.target.value)} className="form-control border-end-0 border rounded-pill" type="text" id="example-search-input" placeholder="Search City" />
                </div>
              </div>
            </form>
          </div>
          {weather.main && <Weather data={weather} />}
        </div>
      </>
    );
  }
}
