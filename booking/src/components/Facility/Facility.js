import { useParams } from "react-router-dom";
import "../App.css";
import "./Facility.css";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";
import Footer from "../common/Footer";
import indoorData from "../data/IndoorList.json";

function FacilityTitle({ title, description }) {
  return (
    <div className="title_others">
      <div className="border"></div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FacilityView({ image, type }) {
  return (
    <div className="content_img">
      <img src={image} alt={type} />
    </div>
  );
}

/* function FacilityButton({ btn }) {
  return (
    <>
      <div className="content_btn type_others">
        <div className="btn">
          <Link>공유하기</Link>
        </div>
        <div className="btn">
          <Link to={btn.link}>예약하기</Link>
        </div>
      </div>
    </>
  );
} */

function FacilitySpec({ spec }) {
  return (
    <div className="others_spec">
      <ul>
        <li>
          {spec.map((item, index) => (
            <p key={`key-${index}`}>{item.key}</p>
          ))}
        </li>
        <li>
          {spec.map((item, index) => (
            <p key={`spec-${index}`}>{item.spec}</p>
          ))}
        </li>
      </ul>
    </div>
  );
}

/* function FacilityNotice({ notice }) {
  return (
    <>
      <div className="others_notice">
        <h4>안내사항</h4>
        <div>
          <p>안내사항을 지켜주세요.</p>
          <p>안내사항을 지켜주세요.</p>
          <p>안내사항을 지켜주세요.</p>
          <p>안내사항을 지켜주세요.</p>
        </div>
      </div>
    </>
  );
} */

function Facility() {
  const { linkPath } = useParams();
  const type = indoorData[linkPath] ? indoorData[linkPath][0] : null;

  if (!type) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div className="inner">
          <div className="content_main">
            <FacilityTitle title={type.title} description={type.description} />
            <FacilityView image={type.image} type={type.type} />
            {/* FacilityButton은 데이터 구조에 맞게 수정 필요 */}
            <FacilitySpec spec={type.spec[0]} />
            {/* FacilityNotice는 필요에 따라 추가 */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Facility;
