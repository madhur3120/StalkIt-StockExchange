import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";
import useInput from "../../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

const CompDropdown = () => {
  const { sendRequest, isError } = useRequest();
  const [comp, setComp] = useState("ashokley");

  useEffect(() => {
    const getcomp = async () => {
      const response = await sendRequest(
        "http://localhost:5001/companies/search",
        "POST",
        JSON.stringify({
          company: comp,
        }),
        { "Content-Type": "application/json" }
      );
      console.log(response);
    };
    getcomp();
  }, [comp]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setComp(e.target.value);
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
    </>
  );
};
export default CompDropdown;
