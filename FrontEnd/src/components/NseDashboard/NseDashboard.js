import React, { useState, useEffect } from "react";
import "./NseDashboard.css";
import LinearProgress from "@mui/material/LinearProgress";
import Tst from "../../Chart/Tst";
import { useRequest } from "../../hooks/request-hook";
import Navbar from "../Home/Navbar";

const NseDashboard = () => {
  const { sendRequest } = useRequest();
  const [comp, setComp] = useState("nse");
  const [time, setTime] = useState("");
  const [ret, setRet] = useState(0);
  const [ischart, setIschart] = useState(false);
  const options = [
    "YTD",
    "1 Week",
    "1 Month",
    "3 Months",
    "6 Months",
    "1 Year",
    "2 Year",
    "3 Year",
    "5 Year",
  ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setTime(event.target.value);
  };
  const chartHandler = () => {
    setIschart(true);
  };
  const overviewHandler = () => {
    setIschart(false);
  };
  useEffect(() => {
    if (time != "") {
      const getcomp = async () => {
        const response = await sendRequest(
          "http://localhost:5001/companies/returns",
          "POST",
          JSON.stringify({
            comp: comp,
            time: time,
          }),
          { "Content-Type": "application/json" }
        );
        console.log(response);
        setRet(response.returns.toFixed(4));
      };
      getcomp();
    }
    console.log(time);
  }, [comp, time]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="headtop">
          <div className="headerrrrr">
            <div className="nseeee">NSE</div>
            <div className="bseeee">BSE</div>
          </div>
          <div className="nifty50">
            <h2 className="nifty50header">NIFTY50</h2>
          </div>
          <div className="stockvaluee">
            <div className="leftsidestock">
              <h2 className="nifty50value1">17,956.60</h2>
              <h2 className="nifty50value2">
                <span class="greenuparrow"></span>98.40(0.55%)
              </h2>
              <p className="datestock">As on 13 Jan, 2023 16:10 IST</p>
            </div>
            <div className="rightsidestock">
              <div className="toppppheaddd">Day Range</div>
              <div className="valuesssss">
                <div className="firstvalue">17,774.25</div>
                <div className="secondvalue">17,999.35</div>
              </div>
              <div className="valuesssss">
                <div className="firstvalue1">L</div>
                <div className="secondvalue1">H</div>
              </div>
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={(14000 / 17999.35) * 100}
              />
              <div className="toppppheaddd">52 week Range</div>
              <div className="valuesssss">
                <div className="firstvalue">15,183.40</div>
                <div className="secondvalue">18,887.60</div>
              </div>
              <div className="valuesssss">
                <div className="firstvalue1">L</div>
                <div className="secondvalue1">H</div>
              </div>
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={(14000 / 18887.6) * 100}
              />

              <div className="toppppheaddd">Returns</div>
              <div className="valuesssss1">
                <select
                  onChange={onOptionChangeHandler}
                  className="selectoptionsss"
                >
                  <option>Select Time</option>
                  {options.map((option, index) => {
                    console.log(index, option);
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
                {ret > 0 ? (
                  <p className="percentttt">{ret}</p>
                ) : (
                  <p
                    style={{
                      color: "red",
                      fontSize: "1.25rem",
                      marginLeft: "1rem",
                    }}
                  >
                    {ret}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="bottompage">
            <div className="overvieeewww" onClick={overviewHandler}>
              OVERVIEW
            </div>
            <div className="charrrtttt" onClick={chartHandler}>
              CHART
            </div>
          </div>
          <div className="bottttt mb-5">
            {ischart ? (
              <Tst />
            ) : (
              <div className="overviewvalues">
                <div className="firstrowww">
                  <div className="firstrowleft">
                    <p className="toppppheaddd">Open</p>
                    <h4>17,867.50</h4>
                  </div>
                  <div className="firstrowright">
                    <p className="toppppheaddd">Day Low</p>
                    <h4>17,774.25</h4>
                  </div>
                </div>
                <div className="secondrowww">
                  <div className="secondrowleft">
                    <p className="toppppheaddd">Previous Close</p>
                    <h4>17,858.20</h4>
                  </div>
                  <div className="secondrowright">
                    <p className="toppppheaddd">52 week High</p>
                    <h4>18,887.60</h4>
                  </div>
                </div>
                <div className="thirdrowww">
                  <div className="thirdrowleft">
                    <p className="toppppheaddd">Day High</p>
                    <h4>17,999.35</h4>
                  </div>
                  <div className="thirdrowright">
                    <p className="toppppheaddd">52 week Low</p>
                    <h4>15,183.40</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NseDashboard;
