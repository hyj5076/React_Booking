import { Link, useParams } from "react-router-dom";
import "../App.css";
import "./Facility.css";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";
import Footer from "../common/Footer";
import indoorData from "../data/IndoorList.json";

function FacilityTitle({ title }) {
  return (
    <>
      <div class="title_others">
        <div class="border"></div>
        <div>
          <h3>{title.title}</h3>
          <p>{title.description}</p>
        </div>
      </div>
    </>
  );
}

function FacilityView({ view }) {
  return (
    <>
      <div class="content_img">
        <img src={view.image} alt={view.type} />
      </div>
    </>
  );
}

function FacilityButton({ btn }) {
  return (
    <>
      <div class="content_btn type_others">
        <div class="btn">
          <Link>공유하기</Link>
        </div>
        <div class="btn">
          <Link to={btn}>예약하기</Link>
        </div>
      </div>
    </>
  );
}

function FacilitySpec({ spec }) {
  return (
    <>
      <div class="others_spec">
        <ul>
          <li>
            <p>location</p>
            <p>time</p>
            <p>amenity</p>
            <p>period</p>
          </li>
          <li>
            <p>2층</p>
            <p>9:00 - 22:00</p>
            <p>빔프로젝트, 레이저포인터</p>
            <p>상시</p>
          </li>
        </ul>
      </div>
    </>
  );
}

function FacilityNotice({ notice }) {
  return (
    <>
      {/* <div class="others_notice">
              <h4>안내사항</h4>
              <div>
                <p>안내사항을 지켜주세요.</p>
                <p>안내사항을 지켜주세요.</p>
                <p>안내사항을 지켜주세요.</p>
                <p>안내사항을 지켜주세요.</p>
              </div>
            </div> */}
    </>
  );
}

function Facility() {
  const { linkPath } = useParams();
  const type = indoorData[linkPath] && indoorData[linkPath][0];

  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div class="inner">
          <div class="content_main">
            <FacilityTitle title={type.title} />
            <FacilityView view={type.view} />
            <FacilityButton btn={type.btn} />
            <FacilitySpec spec={type.spec} />
            <FacilityNotice notice={type.notice} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Facility;
