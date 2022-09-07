import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get("http://localhost:8000/query")
      .then((res) => setData(res.data.results.channel));
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  return (
    <div>
      <div className="main">
        <div className="row">
          <div className="heading">
            {data.location.city}, {data.location.region},{" "}
            {data.location.country} as 04.37 EDT
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="temp">{data.item.condition.temp}°C</div>
            <div className="condition">{data.item.condition.text}</div>
            <div className="day">
              Sunrise:{data.astronomy.sunrise} Sunset:{data.astronomy.sunrise}
            </div>
          </div>
          <div className="col-4 other-details">
            <div>Wind speed : {data.wind.speed}Km/hr</div>
            <div>Humidity : {data.atmosphere.humidity}</div>
            <div>Pressure : {data.atmosphere.pressure}</div>
            <div>Visibility : {data.atmosphere.visibility}</div>
          </div>
          <div className="col-4">
            <img src={data.image.url} alt="weather img" />
          </div>
        </div>
      </div>

      <div className="forecast">
        <div className="row">
          <div className="heading-2">
            Today's Forecast for {data.location.city}, {data.location.region},{" "}
            {data.location.country}
          </div>
        </div>
        <div className="row">
          <div className="col-3 for-card">
            <div className="heading-3">{data.item.forecast[0].day}</div>
            <div className="temp-2">{data.item.forecast[0].code}°C</div>
            <div className="percent">{data.item.forecast[0].high}%</div>
          </div>
          <div className="col-3 for-card">
            <div className="heading-3">{data.item.forecast[1].day}</div>
            <div className="temp-2">{data.item.forecast[1].code}°C</div>
            <div className="percent">{data.item.forecast[1].high}%</div>
          </div>
          <div className="col-3 for-card">
            <div className="heading-3">{data.item.forecast[2].day}</div>
            <div className="temp-2">{data.item.forecast[2].code}°C</div>
            <div className="percent">{data.item.forecast[2].high}%</div>
          </div>
          <div className="col-3 for-card">
            <div className="heading-3">{data.item.forecast[3].day}</div>
            <div className="temp-2">{data.item.forecast[3].code}°C</div>
            <div className="percent">{data.item.forecast[3].high}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
