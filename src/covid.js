import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getInputData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise[0]);
    setData(actualData.statewise[0]);
  };

  useEffect(() => {
    getInputData();
  }, []);

  return (
    <div>
      <h1>Live Covid Tracker</h1>
      <ul>
        <div>
          <li>
            <p>our</p>
            <p>India</p>
          </li>
        </div>
        <div>
          <li>
            <p>Total recovered</p>
            <p>{data.recovered}</p>
          </li>
        </div>
        <div>
          <li>
            <p>Total active</p>
            <p>{data.active}</p>
          </li>
        </div>
        <div>
          <li>
            <p>Total confirmed</p>
            <p>{data.confirmed}</p>
          </li>
        </div>
        <div>
          <li>
            <p>Total death</p>
            <p>{data.deaths}</p>
          </li>
        </div>
        <div>
          <li>
            <p>Last updatedtime</p>
            <p>{data.lastupdatedtime}</p>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default App;
