// import Tst from "../../Chart/Tst";
import Navbar from "../Home/Navbar";
import TableCard from "./TableCard";
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
        <TableCard></TableCard>
      </div>
    </>
  );
};
export default LandingPage;
