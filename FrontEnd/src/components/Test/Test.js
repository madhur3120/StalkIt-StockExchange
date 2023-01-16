import Card from "./Card";
import best from "../../assests/best.png";
import reliance from "../../assests/reliance.png";
import cipla from "../../assests/Cipla.png";
import tata from "../../assests/tatasteel.png";
import ashokley from "../../assests/ashokley.png";
import eichermot from "../../assests/eichermot.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";
import Navbar from "../Home/Navbar";


const Temp = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const ColumnRight = styled.div`
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const Test = () => {
  const [time, setTime] = useState("");
  const { sendRequest } = useRequest();
  const [ret, setRet] = useState(0);
  const [imag, setImg] = useState("");

  useEffect(() => {
    if (time != "") {
      const getcomp = async () => {
        const response = await sendRequest(
          "http://localhost:5001/companies/best",
          "POST",
          JSON.stringify({
            time: time,
          }),
          { "Content-Type": "application/json" }
        );
        console.log(response.comp);
        setRet(response.returns.toFixed(4));
        setImg(response.comp);
      };
      getcomp();
    }
    console.log(time);
  }, [time]);
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
  return (
    <div>
      <Navbar />
      <div
        style={{ textAlign: "center", fontWeight: "bold", padding: "4%" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Temp>
          <Card>
            <h1>Best Performing Company</h1>
            <h5>(according to Returns)</h5>
            <div>
              <ColumnRight>
                <img
                  src={best}
                  style={{
                    width: "30%",
                    padding: "2rem",
                    objectFit: "contain",
                    minWidth: "300px",
                  }}
                ></img>
              </ColumnRight>
              <label style={{ fontSize: "1.5rem", padding: "1rem" }} for="type">
                For past
              </label>
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
                <p className="percentttt">Returns : {ret}%</p>
              ) : (
                <p
                  style={{
                    color: "red",
                    fontSize: "1.25rem",
                    marginLeft: "1rem",
                  }}
                ></p>
              )}
            </div>
            <div
              style={{ height: "8rem" }}
              className="d-flex justify-content-center align-items-center"
            >
              {imag == "tatasteel" && (
                <img src={tata} style={{ height: "60%" }}></img>
              )}
              {imag == "eichermot" && (
                <img src={eichermot} style={{ height: "60%" }}></img>
              )}
              {imag == "ashokley" && (
                <img src={ashokley} style={{ height: "60%" }}></img>
              )}
              {imag == "cipla" && (
                <img src={cipla} style={{ height: "60%" }}></img>
              )}
              {imag == "reliance" && (
                <img src={reliance} style={{ height: "60%" }}></img>
              )}
            </div>
          </Card>
        </Temp>
      </div>
    </div>
  );
};
export default Test;
