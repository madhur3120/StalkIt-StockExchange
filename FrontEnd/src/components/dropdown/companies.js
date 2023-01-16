import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";
import useInput from "../../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

const CompDropdown = () => {
  const { sendRequest, isError } = useRequest();
  const [comp, setComp] = useState("ashokley");
  const [date, setDate] = useState("2018");

  useEffect(() => {
    const getcomp = async () => {
      const response = await sendRequest(
        "https://flipr-dzx0.onrender.com/companies/search",
        "POST",
        JSON.stringify({
          company: comp,
          date: date,
        }),
        { "Content-Type": "application/json" }
      );
      console.log(response);
    };

    getcomp();
  }, [comp, date]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setComp(e.target.value);
    // console.log(response);
  };
  const DatechangeHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    // console.log(response);
  };

  return (
    <>
      <select name="type" value={comp} onChange={changeHandler}>
        <option>Select Companies</option>
        <option value="ashokley">Ashokley</option>
        <option value="cipla">Cipla</option>
        <option value="eichermot">Eichermot</option>
        <option value="reliance">Reliance</option>
        <option value="tatasteel">Tata Steel</option>
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
export default CompDropdown;
