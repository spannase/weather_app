import axios from "axios"
import { useEffect, useState } from "react";

export const Home=()=>{
    const [weather, setWeather]=useState('');
    const [city, setcity]=useState("")

const getweather=()=>{

    // let city ="Nagpur";

    const key="b63af0a25975608dc32993990a556e03"
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then((res)=>{
               
              console.log(res.data)

              setWeather(res.data.main)
    })
}
useEffect(()=>{
    getweather()
},[])


    return (
<div>
    <div>
        <input type="text" 
           onChange={(e)=>setcity(e.target.value)}
        />
        <button onClick={getweather}>search</button>

        
    </div>


<div>
             <h1>City : {city}</h1>
             <h3>temp : {weather.temp}°</h3>
             <h3>humidity: {weather.humidity}</h3>
             <h3>pressure: {weather.pressure}</h3>
        </div>

</div>
       
    )
}