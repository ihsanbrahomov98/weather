import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./main.css";

const MainContainer = () => {
  return (
    <>
      <div className="container">
        <div className="containerWrapper">
          <div className="contentWrapper">
            <div className="firstRow">
              <span>Tokyo</span>
              <span>Sydney</span>
              <span>Tokyo</span>
              <span>Sydney</span>
              <span>Tokyo</span>
            </div>
            <div className="secondRow">
              <input className="secondRowInput"></input>
              <div className="secondRowIconWrapper">
                <div className="secondRowSearchIcon">
                  {" "}
                  <SearchIcon />
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
