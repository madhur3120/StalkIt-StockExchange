import React from "react";
import  "./styles.css";
import "./TableCard.css";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";
const TableCard =(props)=> {
    const [value, setValue] = useState(null);
    const valueChangeHandler = (event) => {
        setValue(event);
    }
    // console.log(value);
    const tableDataDOM = props.tableData.map((data) => {
        const currency = "₹";
        return (
          <tr>
            <th scope="row">{data.Date}</th>
            {/* <td>{data.lastUpdatedData}</td> */}
            <td>{currency + " " + data.Open.toFixed(2)}</td>
            <td>{currency + " " + data.Low.toFixed(2)}</td>
            <td>{currency + " " + data.High.toFixed(2)}</td>
            <td>{currency + " " + data.Close.toFixed(2)}</td>
            <td>{currency + " " + data.Adj}</td>
            <td>{currency + " " + data.Volume.toFixed(2)}</td>
          </tr>
        );
    });
    return (
      <>
        <div className="container"> 
          <DateRangePicker placeholder="Select Date Range" value={value} onChange = {valueChangeHandler}/>
          {/* <input type="text" name="daterange" value="01/01/2015 - 01/31/2015" /> */}
        </div>
        <div className="card card-container table-data">
          <div className="card-body">
            {/* <h2 className="h6 mb-3">Latest available data:</h2> */}

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  {/* <th scope="col">Last Updated Data</th> */}
                  <th scope="col">Open Price</th>
                  <th scope="col">Low Price</th>
                  <th scope="col">High Price</th>
                  <th scope="col">Previous Close Price</th>
                  <th scope="col">Adj Close</th>
                  <th scope="col">Volume</th>
                </tr>
              </thead>
              <tbody>{tableDataDOM}</tbody>
            </table>

            {/* <p className="mb-0 no-data-message">
              There are currently no available data. Please search stock code
              for more details.
            </p> */}
          </div>
        </div>
      </>
    );
  
}

export default TableCard;
