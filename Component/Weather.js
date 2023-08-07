import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  const sunset = new Date(data.sys.sunset * 1000).toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

  const nowInLocalTime = Date.now() + 1000 * (data.timezone / 3600);
  const currentTime = new Date(nowInLocalTime).toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

  //console.log(currentTime);
  return (
    <>
      <div className="row mt-5">
        <div className="col-6">
          <div className="rounded-3 p-3 box">
            <h2 className="mb-0">
              {data.name},{data.sys.country}
            </h2>
            <div>{currentTime}</div>
            <div className="d-flex align-item-center">
              <div>
                <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="s" width={100} height={100} />
              </div>
              <h1 className="align-self-center">{data.main.temp.toFixed(0)}&#176;</h1>
              <div className="ms-3 align-self-center">
                <h4>{data.weather[0].main}</h4>
                <div className="d-flex align-item-center">
                  Feel like <h6 className="mb-0 ms-2">{data.main.feels_like.toFixed(0)}&#176;</h6>
                </div>
              </div>
            </div>
            <div className="d-flex my-3">
              <div>The weather will be {data.weather[0].description}. &nbsp; The </div>
              <div className="d-flex align-item-center me-2">
                &nbsp;Min : <h6 className="mb-0 ms-2">{data.main.temp_min}</h6>
              </div>
              <div className="d-flex align-item-center">
                and Max : <h6 className="mb-0 ms-2">{data.main.temp_max}</h6>
              </div>
            </div>
            <div className="d-flex mt-5">
              <div className="me-5">
                <label>Humidity</label>
                <h6>{data.main.humidity}%</h6>
              </div>
              <div className="me-5">
                <label>Wind</label>
                <h6>{data.wind.speed.toFixed(0)} MPH</h6>
              </div>
              <div className="me-5">
                <label>Visibility</label>
                <h6>{data.visibility} km</h6>
              </div>
              <div className="me-5">
                <label>Pressure</label>
                <h6>{data.main.pressure} mb</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 rounded-3 p-5 box">
          <div className="d-flex justify-content-between align-item-center">
            <div className="align-self-center">
              <Image src="/img/sunrise.png" alt="img" width={50} height={50} />
              <label>Sunrise</label>
              <h6>{sunrise}</h6>
            </div>
            <div className="align-self-center">
              <Image src="/img/sunset.png" alt="img" width={50} height={50} />
              <label>Sunset</label>
              <h6>{sunset}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
