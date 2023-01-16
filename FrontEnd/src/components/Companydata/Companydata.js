import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import { useRequest } from "../../hooks/request-hook";
const Companydata = () => {
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
  const companyy = [
    "Reliance",
    "Tata Steel",
    "Ashok Leyland",
    "Eicher Motors",
    "Cipla",
  ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setTime(event.target.value);
  };
  const onCompanyChangeHandler = (e) => {
    console.log("User Selected Value - ", e.target.value);
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
          "https://flipr-dzx0.onrender.com/companies/returns",
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
    <div className="container">
      <div className="headtop">
        <div className="headerrrrr">
          {/* <Link
            to="/nsedashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="nseeee">NSE</div>
          </Link>
          <Link
            to="/bsedashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="bseeee">BSE</div>
          </Link> */}
          <select onChange={onCompanyChangeHandler} className="selectoptionsss">
            <option>Select Company</option>
            {companyy.map((companyy, index) => {
              return (
                <option key={index} value={companyy}>
                  {companyy}
                </option>
              );
            })}
          </select>
        </div>
        <div className="nifty50">
          <h2 className="nifty50header">NIFTY50</h2>
        </div>
        <div className="stockvaluee">
          <div className="leftsidestock">
            <h2 className="nifty50value1">17,894.85</h2>
            <h2 className="nifty50value2" style={{ color: "#d95858" }}>
              <span class="reddownarrow"></span>-61.75(-0.34%)
            </h2>
            <p className="datestock">As on 12 Jan, 2023 16:10 IST</p>
          </div>
          <div className="rightsidestock">
            <div className="toppppheaddd">Day Range</div>
            <div className="valuesssss">
              <div className="firstvalue">17,853.65</div>
              <div className="secondvalue">18,049.65</div>
            </div>
            <div className="valuesssss">
              <div className="firstvalue1">L</div>
              <div className="secondvalue1">H</div>
            </div>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(14968.58 / 18049.65) * 100}
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
              value={(14960.89 / 18887.6) * 100}
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
      </div>
    </div>
  );
};

export default Companydata;
