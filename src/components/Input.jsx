import { useState } from "react"

export const Input=({city, setcity, getdata })=>{
    
    return (
        <div>
             <input type="text" city={city}
           onChange={(e)=>setcity(e.target.value)}
        />
        <button onClick={getdata}>search</button>
        </div>
    )
}