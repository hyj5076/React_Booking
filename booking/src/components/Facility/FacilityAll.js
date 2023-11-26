import "../App.css";
import "./FacilityAll.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SelectBox from "../common/SelectBox";
import indoorAllData from "../data/IndoorAll.json";
import outdoorAllData from "../data/OutdoorAll.json";
import { Link, useParams } from "react-router-dom";

function FacilityList({ type }) {
  return (
    <>
      {type.map((site) => (
        <div className="content_list">
          <h3 className={site.alignment}>{site.title}</h3>
          <div className="content_list_txt">
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
  const { linkPath } = useParams();
  const dataToShow =
    linkPath === "outdoor"
      ? outdoorAllData.OutdoorAllData
      : indoorAllData.IndoorAllData;

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
