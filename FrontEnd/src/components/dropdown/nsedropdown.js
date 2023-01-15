import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";

const isNotEmpty = (value) => value.trim() !== "";

const MarketDropdown = () => {
  const { sendRequest, isError } = useRequest();
  const [comp, setComp] = useState("nse");

  useEffect(() => {
    const getcomp = async () => {
      const response = await sendRequest(
        "http://localhost:5001/companies/index",
        "POST",
        JSON.stringify({
          index: comp,
        }),
        { "Content-Type": "application/json" }
      );
      console.log(response);
    };
    getcomp();
  }, [comp]);

  const changeHandler = async (e) => {
    setComp(e.target.value);
  };
  return (
    <>
      <select name="type" value={comp} onChange={changeHandler}>
        <option>Select Market Index</option>
        <option value="nse">NSE</option>
        <option value="bse">BSE</option>
      </select>
    </>
  );
};
export default MarketDropdown;
