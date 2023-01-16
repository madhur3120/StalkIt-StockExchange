import Card from "./Card";
import best from "../../assests/best.png";
import reliance from "../../assests/reliance.png";
import cipla from "../../assests/Cipla.png";
import tata from "../../assests/tatasteel.png";
import ashokley from "../../assests/ashokley.png";
import eichermot from "../../assests/eichermot.png";
import styled from "styled-components";
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
const Test= () => {
    return (
      <div style={{ textAlign: "center", fontWeight: "bold", padding: "4%" }}>
        <Temp>
          <Card>
            <h1 style={{ color: "white" }}>Best Performing Company</h1>
            <h5 style={{ color: "white" }}>(according to Returns)</h5>
            <div>
              <ColumnRight>
                <img
                  src={best}
                  style={{
                    width:"30%",
                    padding: "2rem",
                    objectFit: "contain",
                    minWidth: "300px",
                  }}
                ></img>
              </ColumnRight>
              <label
                style={{ color: "white", fontSize: "3rem", padding: "1rem" }}
                for="type"
              >
                For past
              </label>
              <select name="type" style={{ width: "10rem", height: "2rem" }}>
                <option>1 year</option>
                <option value="2018">1 week</option>
                <option value="2018">1 month</option>
                <option value="2019">4 months</option>
                <option value="2020">6 months</option>
                <option value="2021">1 year</option>
                <option value="2022">3 years</option>
                <option value="2023">5 years</option>
              </select>
            </div>
            <div
              style={{ backgroundColor: "#FFFFDE", height: "8rem" }}
              className="d-flex justify-content-center align-items-center"
            >
              {/* <img src={reliance} style={{ height: "6rem" }}></img> */}

              {/* <img src={cipla} style={{ height: "6rem" }}></img> */}
              {/* <img src={ashokley} style={{ height: "6rem" }}></img> */}
              {/* <img src={tata} style={{ height: "6rem" }}></img> */}
              <img src={eichermot} style={{ height: "60%" }}></img>
            </div>
          </Card>
        </Temp>
      </div>
    );
}
export default Test;