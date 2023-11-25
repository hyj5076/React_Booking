import { Link } from "react-router-dom";
import "../App.css";
import "./Facility.css";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";
import Footer from "../common/Footer";

function FacilityTitle() {
  return (
    <>
      <div class="title_others">
        <div class="border"></div>
        <div>
          <h3>Auditorium/Singing</h3>
          <p>
            에잇포레에서는 모던과 클래식, 도시와 자연이 공존하는
            <br /> 안락한 휴식의 시간을 선물할 것입니다.
          </p>
        </div>
      </div>
    </>
  );
}

function FacilityView() {
  return (
    <>
      <div class="content_img">
        <img src="/images/sub/indoor_audi.jpg" alt="소강당" />
      </div>
    </>
  );
}

function FacilityButton() {
  return (
    <>
      <div class="content_btn type_others">
        <div class="btn">
          <Link>공유하기</Link>
        </div>
        <div class="btn">
          <Link>예약하기</Link>
        </div>
      </div>
    </>
  );
}

function FacilitySpec() {
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

function FacilityNotice() {
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
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div class="inner">
          <div class="content_main">
            <FacilityTitle />
            <FacilityView />
            <FacilityButton />
            <FacilitySpec />
            <FacilityNotice />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Facility;
