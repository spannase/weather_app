import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Forecast } from "./Forecast";

export const Weather = () => {
  const [weather, setWeather] = useState("");
  const [forecast, setforecast] = useState([]);
  const [city, setcity] = useState("");

  let img = "";

  const getweather = () => {
    const key = "b63af0a25975608dc32993990a556e03";
    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then((res) => {
        // console.log(res.data);
        setWeather(res.data.main);
      });
  };

  const getforecast = () => {
    const key = "b63af0a25975608dc32993990a556e03";
    axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
      )
      .then((res) => {
        // console.log(res.data.list);
        setforecast(res.data.list);
      });
  };

 

  const getdata = () => {
    getweather();
    getforecast();
   
  };

  return (
    <div>
      <div>
        <Input city={city} setcity={setcity} getdata={getdata} />
      </div>
      {weather ? (
        <div>
          <h1>City : {city}</h1>
          <h3>temp : {weather.temp}°</h3>
          <h3>humidity : {weather.humidity}</h3>
          <h3>pressure : {weather.pressure}</h3>
        </div>
      ) : (
        ""
      )}
      {/* forecast */}
      <Forecast img={img} forecast={forecast} />



     <hr />
      {/* map */} 

  <div style={{"margin":"30px" }}>  
          <iframe
              width="600"
             height="500"
             id="gmap_canvas" 
             src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
             frameborder="0" 
             scrolling="no"
             marginheight="0"
             marginwidth="0">   
             </iframe>  
             </div>
    </div>
  );
};
