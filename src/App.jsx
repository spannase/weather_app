import { useState } from "react";
 import "./App.css"
import { Forecast } from "./components/Forecast";
import { Weather } from "./components/Weather";
function App() {
 
  return (
    <div className="App"> 
 
    <Weather/>
  
    </div>
     
  );
}

export default App;