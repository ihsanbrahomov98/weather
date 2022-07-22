import React, { useState } from "react";
import { axios } from "axios";

const Api = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Plovdiv");
  const ulr =
    "https://api.openweathermap.org/data/2.5/weather?q=plovdiv&appid=ce31168210cef5b45f6882a250d98bd3";

  const getData = (e) => {
    if (e.key === "Enter") {
      axios.get(ulr).then((response) => {
        setData(response.data);
      });
    }
  };

  return <div>api</div>;
};

export default Api;
