import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import LightModeIcon from "@mui/icons-material/LightMode";
import AirIcon from "@mui/icons-material/Air";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import "./main.css";

const MainContainer = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("plovdiv");
  const [loadNewData, setLoadNewData] = useState(false);
  const [cyanDegree, setCyanDegree] = useState("cyan");
  const [unit, setUnit] = useState("metric");
  const API_KEY = "&appid=ce31168210cef5b45f6882a250d98bd3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}${API_KEY}&units=${unit}`;

  useEffect(() => {
    const getAxiosData = () => {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    };
    getAxiosData();
  }, [loadNewData]);

  const getData = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()} ${current.getMinutes()}  `;

  return (
    <>
      <div className="container">
        <div className="containerWrapper">
          <div className="contentWrapper">
            <div className="firstRow">
              <span
                onClick={() => {
                  setLocation("sofia");
                  setLoadNewData(!loadNewData);
                }}
              >
                Sofia
              </span>
              <span
                onClick={() => {
                  setLocation("plovdiv");
                  setLoadNewData(!loadNewData);
                }}
              >
                Plovdiv
              </span>
              <span
                onClick={() => {
                  setLocation("varna");
                  setLoadNewData(!loadNewData);
                }}
              >
                Varna
              </span>
              <span
                onClick={() => {
                  setLocation("burgas");
                  setLoadNewData(!loadNewData);
                }}
              >
                Burgas
              </span>
              <span
                onClick={() => {
                  setLocation("madan");
                  setLoadNewData(!loadNewData);
                }}
              >
                Madan
              </span>
            </div>
            <div className="secondRow">
              <div className="inputIconAndInputWrapper">
                <input
                  placeholder="Enter city name"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={getData}
                  className="secondRowInput"
                ></input>
                <div className="secondRowIconWrapper">
                  <div
                    onClick={(e) => getData({ key: "Enter" })}
                    className="secondRowSearchIcon"
                  >
                    {" "}
                    <SearchIcon fontSize="small" />
                  </div>
                </div>
                <div className="secondLocationOnIcon">
                  {" "}
                  <LocationOnIcon fontSize="small" />
                </div>
              </div>
              <div className="secondRowDegreeWrapper">
                <div
                  style={{ color: cyanDegree ? "white" : "cyan" }}
                  onClick={() => {
                    setUnit("metric");
                    setCyanDegree(false);
                    setLoadNewData(!loadNewData);
                  }}
                >
                  °C |
                </div>
                <div
                  onClick={() => {
                    setUnit("imperial");
                    setCyanDegree(true);
                    setLoadNewData(!loadNewData);
                  }}
                  style={{
                    paddingLeft: "2%",
                    color: cyanDegree ? "cyan" : "white",
                  }}
                >
                  °F
                </div>
              </div>
            </div>
            <div className="thirdRow">
              <p>{date} </p>
            </div>
            <div className="fourthRow">
              <p>{data.name}</p>
            </div>
            <div className="fifthRow">
              {" "}
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
            <div className="sixthRow">
              <div className="sixthRowFirst">
                <div className="sixthRowCircle"></div>
              </div>
              <div className="sixthRowTwo">
                {" "}
                {data.main ? <p>{data.main.temp.toFixed()}°</p> : null}{" "}
              </div>
              <div className="sixthRowThird">
                <div className="sixthRowThirdFirstROw">
                  <ThermostatIcon fontSize="small" />
                  <div style={{ paddingLeft: "3%", fontWeight: 700 }}>
                    {" "}
                    Really feel:
                  </div>
                  <div style={{ fontWeight: 700 }}>
                    {data.main ? (
                      <p> {data.main.feels_like.toFixed()}°</p>
                    ) : null}{" "}
                  </div>
                </div>
                <div className="sixthRowThirdFirstROw">
                  <OpacityIcon fontSize="small" />
                  <div style={{ fontWeight: 700 }}>Humidity:</div>
                  <div style={{ fontWeight: 700 }}>
                    {data.main ? <p>{data.main.humidity.toFixed()}%</p> : null}{" "}
                  </div>
                </div>
                <div
                  style={{ paddingLeft: "5%" }}
                  className="sixthRowThirdFirstROw"
                >
                  <AirIcon fontSize="small" />
                  <div style={{ paddingLeft: "4%", fontWeight: 700 }}>
                    Wind speed:
                  </div>

                  <div style={{ fontWeight: 700 }}>
                    {data.main ? <p> {data.wind.speed.toFixed()}%</p> : null}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="seventhRow">
              <LightModeIcon fontSize="small" />
              <span>
                Rise: {data.main ? <span> {data.sys.sunrise}</span> : null} |
              </span>
              <WbTwilightIcon fontSize="small" />
              <span>Set: 04:50 |</span>
              <LightModeIcon fontSize="small" />
              <span>
                Rise:{" "}
                {data.main ? (
                  <span> {data.main.temp_max.toFixed()}°</span>
                ) : null}{" "}
                |
              </span>
              <LightModeIcon fontSize="small" />
              <span>
                Rise:{" "}
                {data.main ? (
                  <span> {data.main.temp_min.toFixed()}°</span>
                ) : null}{" "}
                |
              </span>
            </div>
            <div className="eightRow">HOURLY FORECAST</div>
            <div className="ninethRow">
              <div>-</div>
            </div>
            <div className="tenthRow">
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnIcon">icon</div>
                <div className="tenthRowColumnDegree">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnIcon">icon</div>
                <div className="tenthRowColumnDegree">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnIcon">icon</div>
                <div className="tenthRowColumnDegree">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnIcon">icon</div>
                <div className="tenthRowColumnDegree">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnIcon">icon</div>
                <div className="tenthRowColumnDegree">04:00</div>
              </div>
            </div>
            <div className="eightRow">HOURLY FORECAST</div>
            <div className="ninethRow">
              <div>-</div>
            </div>
            <div className="tenthRow">
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnTime">icon</div>
                <div className="tenthRowColumnTime">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnTime">icon</div>
                <div className="tenthRowColumnTime">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnTime">icon</div>
                <div className="tenthRowColumnTime">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnTime">icon</div>
                <div className="tenthRowColumnTime">04:00</div>
              </div>
              <div className="tenthRowColumn">
                <div className="tenthRowColumnTime">04:00</div>
                <div className="tenthRowColumnTime">icon</div>
                <div className="tenthRowColumnTime">04:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
