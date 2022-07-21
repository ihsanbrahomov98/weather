import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
            <div className="thirdRow">1</div>
            <div className="fourthRow">1</div>
            <div className="fifthRow">1</div>
            <div className="sixthRow">1</div>
            <div className="seventhRow">1</div>
            <div className="eightRow">1</div>
            <div className="ninethRow">1</div>
            <div className="tenthRow">1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
