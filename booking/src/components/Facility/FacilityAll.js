import "../App.css";
import "./FacilityAll.css";
import { Link, useLocation } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SelectBox from "../common/SelectBox";
import indoorAllData from "../data/IndoorAll.json";
import outdoorAllData from "../data/OutdoorAll.json";

function FacilityList({ type }) {
  return (
    <>
      {type.map((site, index) => (
        <div key={index} className="content_list">
          <h3 className={site.alignment}>{site.title}</h3>
          <div className="content_list_txt padding-10">
            <p className={site.alignment}>{site.description}</p>
            <div className="content_img">
              <img src={site.image} alt={site.title} />
            </div>
          </div>
          <div className={site.alignment === "left" ? "go" : "go_left"}>
            <Link to={site.link}>
              <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

function FacilityAll() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  const dataToShow =
    lastSegment === "indoor"
      ? indoorAllData.IndoorAllData
      : outdoorAllData.OutdoorAllData;

  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div id="roomList" className="inner">
          <FacilityList type={dataToShow} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FacilityAll;
