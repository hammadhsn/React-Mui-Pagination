
import React, { useState } from "react";


export default function Inputs() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "", phone: "" });

  const handleChange = (propertyName) => (event) => {
    setInputData((inputData) => ({
      ...inputData,
      [propertyName]: event.target.value
    }));
  };

  return (
    <div style={{width: "50%%", height: "auto", display: "flex", justifyContent: "center"}}>
    <form style={{width: "20%", height: "auto", display: "flex", justifyContent: "center", flexDirection: "column"}}>
    <label >First name</label>
    <input
        type="text"
        onChange={handleChange("firstName")}
        value={inputData.firstName}
      />
       <label >Last name</label>
      <input
        type="text"
        onChange={handleChange("lastName")}
        value={inputData.lastName}
      />
       <label >Phone</label>
      <input
        type="text"
        onChange={handleChange("phone")}
        value={inputData.phone}
      />
       
        <button onClick={console.log(inputData)} type="submit" value="Submit">
            Submit

        </button>
    </form>

      
    </div>
  );
}