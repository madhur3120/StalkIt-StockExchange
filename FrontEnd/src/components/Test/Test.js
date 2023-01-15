import Card from "./Card";
import best from "../../assests/best.png";
const Test= () => {
    return (
      <div style={{ textAlign: "center", fontWeight: "bold", padding: "4%" }}>
        <Card>
          <h1 style={{ color: "white" }}>Best Performing Company</h1>
          <h5 style={{ color: "white" }}>(according to Returns)</h5>
          <div>
            <img src={best} style={{ width: "30rem", padding: "2rem" }}></img>
            <label style={{ color: "white" ,fontSize: "3rem",padding: "1rem"}} for="type">
              For past
            </label>
            <select name="type" style={{width:"10rem",height:"2rem"}}>
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
          
        </Card>
      </div>
    );
}
export default Test;