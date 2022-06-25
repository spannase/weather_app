import { useState } from "react";

export const Input = ({ city, setcity, getdata }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <input
        type="text"
        city={city}
        onChange={(e) => setcity(e.target.value)}
        placeholder="Enter City name"
      />
      <button
        onClick={getdata}
        style={{
          border: "1px solid black",
          background: "rgb(5, 133, 238)",
          color: "white",
        }}
      >
        search
      </button>
    </div>
  );
};
