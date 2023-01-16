import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";

const isNotEmpty = (value) => value.trim() !== "";

const MarketDropdown = () => {
  const { sendRequest, isError } = useRequest();
  const [comp, setComp] = useState("nse");
  const [date, setDate] = useState("2018");

  useEffect(() => {
    const getcomp = async () => {
      const response = await sendRequest(
        "https://flipr-dzx0.onrender.com/companies/index",
        "POST",
        JSON.stringify({
          index: comp,
          date: date,
        }),
        { "Content-Type": "application/json" }
      );
      console.log(response);
    };
    getcomp();
  }, [comp, date]);

  const changeHandler = async (e) => {
    setComp(e.target.value);
  };
  const DatechangeHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    // console.log(response);
  };
  return (
    <>
      <select name="type" value={comp} onChange={changeHandler}>
        <option>Select Market Index</option>
        <option value="nse">NSE</option>
        <option value="bse">BSE</option>
      </select>
      <select name="type" value={date} onChange={DatechangeHandler}>
        <option>Select Year</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </>
  );
};
export default MarketDropdown;
