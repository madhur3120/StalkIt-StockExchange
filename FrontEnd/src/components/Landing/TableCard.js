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
    var tableD = props.tableData;
    
    if(value!=null){
      var month1 = value[0].getUTCMonth() + 1; //months from 1-12
      var day1 = value[0].getUTCDate();
      var year1 = value[0].getUTCFullYear();
      var month2 = value[1].getUTCMonth() + 1; //months from 1-12
      var day2 = value[1].getUTCDate();
      var year2 = value[1].getUTCFullYear();
      if (month1 < 10) {
        month1 = "0" + month1;
      }
      if (day1 < 10) {
        day1 = "0" + day1;
      }
      if (month2 < 10) {
        month2 = "0" + month2;
      }
      if (day2 < 10) {
        day2 = "0" + day2;
      }
      var newdate1 = year1 + "-" + month1 + "-" + day1;
      var newdate2 = year2 + "-" + month2 + "-" + day2;
      
      let filtered_array = props.tableData.filter(function (el) {
        // console.log(el.Date);
        return el.Date >= newdate1 && el.Date <= newdate2;
      });
      tableD = filtered_array;
    }
    const tableDataDOM = tableD.map((data) => {
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
