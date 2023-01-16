// import Tst from "../../Chart/Tst";
import Navbar from "../Home/Navbar";
import TableCard from "./TableCard";
import data from "../../Chart/reliance.json";
import Companydata from "../Companydata/Companydata";


const LandingPage = () => {
  const dates = [];
  const compname = [];
  return (
    <>
      <Navbar></Navbar>
      <Companydata />
      {/* <div>
        <Tst></Tst>
      </div> */}
      <div>
        <TableCard tableData={data}></TableCard>
      </div>
    </>
  );
};
export default LandingPage;
