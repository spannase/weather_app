import { useState } from "react";
import axios from "axios";
import rain from "../Assets/rain.png";
import clear from "../Assets/clear.png";
import clouds from "../Assets/clouds.jpg";
import day from "../Assets/day.jpg";

export const Forecast = ({ forecast, img }) => {
  return (
    <div>
      <div style={{ "display": "flex", "gap": "15px" , "margin":"30px"}}>
        {forecast.slice(0, 7).map((el, i) => {
          if (el.weather[0].main == "Rain") {
            img = rain;
          } else if (el.weather[0].main == "Clouds") {
            img = clouds;
          } else if (el.weather[0].main == "Clear") {
            img = clear;
          } else {
            img = day;
          }
          return (
            <div
              key={i}
              style={{
                border: "1px solid black",
                width: "160px",
                padding: "10px",
              }}
            >
              <p>date: {el.dt_txt}</p>
              <p>max temp : {el.main.temp_max}°</p>
              <p>min temp :{el.main.temp_min}°</p>
              <img src={img} alt="img" width="120px" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
