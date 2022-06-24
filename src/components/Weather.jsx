import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "./Input";

export const Weather = () => {
  const [weather, setWeather] = useState("");
  const [forecast, setforecast] = useState([]);
  const [city, setcity] = useState("");

  const [img, setimg]= useState("");


  const getweather = () => {
    const key = "b63af0a25975608dc32993990a556e03";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then((res) => {
        console.log(res.data);

        setWeather(res.data.main);
      });
  };

  const getforecast = () => {
    const key = "b63af0a25975608dc32993990a556e03";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
      )
      .then((res) => {
        console.log(res.data.list); 
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

      <div>
        <h1>City : {city}</h1>
        <h3>temp : {weather.temp}°</h3>
        <h3>humidity: {weather.humidity}</h3>
        <h3>pressure: {weather.pressure}</h3>
      </div>


      <div>
       { 

        // for(let i=0;i<=7;i++){
            forecast.slice(0, 7).map((el,i)=>{  
                
                return (  
                 <div key={i}> 
                    <p>{el.dt_txt}</p>
                    <p>{el.temp_max}°</p>
                    <p>{el.temp_min}°</p>



                    
                    <img src="" alt="" />
                 </div>)
            })

        // }
         }
      </div>
    </div>
  );
};
