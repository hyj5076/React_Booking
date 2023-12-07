import "./Reservation.css";
import "../App.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Schedule from "./Schedule";
import Step from "./Step";
import Select from "./Select";
import SelectBox from "./SelectBox";

function Reservation() {
  return (
    <>
      <Header />
      <SelectBox />
      <Select />
      <Step />
      <Schedule />
      <Footer />
    </>
  );
}

export default Reservation;
