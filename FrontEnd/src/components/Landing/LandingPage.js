import Tst from "../../Chart/Tst";
import Navbar from "../Home/Navbar";
import TableCard from "./TableCard";
import data from "../../Chart/reliance.json";
const LandingPage = () => {
    return (
      <>
            <Navbar></Navbar>
        <div>
            <Tst></Tst>
        </div>
        <div>
            <TableCard tableData = {data}></TableCard>
        </div>
      </>
    );
}
export default LandingPage;