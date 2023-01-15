import React, { useEffect } from "react";
import "./styles.css";
import "./TableCard.css";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";
import { useRequest } from "../../hooks/request-hook";
import LoadingSpinner from "../../Design/UIElements/LoadingSpinner";
const start = new Date("2022-01-01");
const end = new Date("2023-01-12");
const TableCard = (props) => {
  const [value, setValue] = useState([start, end]);
  const [tables, setTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comp, setComp] = useState("ashokley");

  const valueChangeHandler = (event) => {
    setValue(event);
    console.log(event);
  };
  var tableD = props.tableData;
  const { sendRequest } = useRequest();

  useEffect(() => {
    const getcomp = async () => {
      setLoading(true);
      const response = await sendRequest(
        "http://localhost:5001/companies/datesort",
        "POST",
        JSON.stringify({
          values: value,
          comp: comp,
        }),
        { "Content-Type": "application/json" }
      );
      console.log(response);
      setTable(response);
      setLoading(false);
    };

    getcomp();
  }, [value, comp]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setComp(e.target.value);
    // console.log(response);
  };
  console.log(tables);
  const tableDataDOM = tables.map((data) => {
    const currency = "₹";
    return (
      <tr>
        <th scope="row">{data.date}</th>
        {/* <td>{data.lastUpdatedData}</td> */}
        <td>{currency + " " + data.open.toFixed(2)}</td>
        <td>{currency + " " + data.low.toFixed(2)}</td>
        <td>{currency + " " + data.high.toFixed(2)}</td>
        <td>{currency + " " + data.close.toFixed(2)}</td>
        <td>{currency + " " + data.adjclose}</td>
        <td>{currency + " " + data.volume.toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <>
      <div className="container">
        <DateRangePicker
          placeholder="Select Date Range"
          value={value}
          onChange={valueChangeHandler}
        />
        <select name="type" value={comp} onChange={changeHandler}>
          <option>Select Companies</option>
          <option value="ashokley">Ashokley</option>
          <option value="cipla">Cipla</option>
          <option value="eichermot">Eichermot</option>
          <option value="reliance">Reliance</option>
          <option value="tatasteel">Tata Steel</option>
        </select>
      </div>
      <div className="card card-container table-data">
        <div className="card-body">
          {/* <h2 className="h6 mb-3">Latest available data:</h2> */}
          {loading && (
            <div style={{ textAlign: "center" }}>
              <LoadingSpinner />
            </div>
          )}
          {!loading && (
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
          )}

          {/* <p className="mb-0 no-data-message">
              There are currently no available data. Please search stock code
              for more details.
            </p> */}
        </div>
      </div>
    </>
  );
};

export default TableCard;
