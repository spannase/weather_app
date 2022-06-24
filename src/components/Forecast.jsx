import { useState } from "react";
import axios from "axios"

export const Forecast=()=>{
    const [forecast, setforecast]=useState('');
    const [city, setcity]=useState("")

const getforecast=()=>{
 
    const key="b63af0a25975608dc32993990a556e03"
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=nagpur&appid=${key}&units=metric`).then((res)=>{
               
              console.log(res.data.list)

              setforecast(res.data.list)
    })
}



// getforecast()
    return (
        <div>

         <div>
         {/* {
            forecast.map((el)=>{
                return <div>{el.dt_txt}</div>
            })
         } */}


       
         </div>
        </div>
    )
}