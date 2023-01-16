// import Tst from "../../Chart/Tst";
import Navbar from "../Home/Navbar";
import TableCard from "./TableCard";
<<<<<<< HEAD
import data from "../../Chart/reliance.json";
import Companydata from "../Companydata/Companydata";

=======
>>>>>>> 6a047d19d08fc152c7c18123c6f1d87850d020dd

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
