import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./main.css";

const MainContainer = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("plovdiv");
  const [loadNewData, setLoadNewData] = useState(false);
  const API_KEY = "&appid=ce31168210cef5b45f6882a250d98bd3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}${API_KEY}`;

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
                    onClick={() => getData({ key: "Enter" })}
                    className="secondRowSearchIcon"
                  >
                    {" "}
                    <SearchIcon />
                  </div>
                </div>
                <div className="secondLocationOnIcon">
                  {" "}
                  <LocationOnIcon />
                </div>
              </div>
              <div className="secondRowDegreeWrapper">
                <div>C</div>
                <div>F</div>
              </div>
            </div>
            <div className="thirdRow">
              <p>Today is 21.07.2022 | Local time is 12:55</p>
            </div>
            <div className="fourthRow">
              <p>Madan</p>
            </div>
            <div className="fifthRow">
              {" "}
              <p>Clear</p>
            </div>
            <div className="sixthRow">
              <div className="sixthRowFirst">1</div>
              <div className="sixthRowTwo">2</div>
              <div className="sixthRowThird">
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </div>
            </div>
            <div className="seventhRow">
              <LightModeIcon />
              <span>Rise: 04:50 |</span>
              <LightModeIcon />
              <span>Rise: 04:50 |</span>
              <LightModeIcon />
              <span>Rise: 04:50 |</span>
              <LightModeIcon />
              <span>Rise: 04:50 |</span>
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
