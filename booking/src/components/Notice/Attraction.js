import "../App.css";
import "./Attraction.css";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";

function AttractionTitle() {
  return (
    <>
      <div className="content_title center">
        <h3>Attraction</h3>
        <p>
          에잇포레 근처 가볼만한 곳에 대한 예시 설명입니다.
          <br />
          모던과 클래식, 도시와 자연이 공존하는 안락한 휴식의 시간을 선물할
          것입니다.
        </p>
      </div>
    </>
  );
}

function AttractionContents() {
  return (
    <>
      <div className="content_basic">
        <h4>관성솔밭비치</h4>
        <div className="content_img">
          <img src="/images/sub/attrac0.jpg" alt="볼거리" />
          <div className="arrow_left">
            <i className="bi bi-arrow-left-circle-fill"></i>
          </div>
          <div className="arrow_right">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
        <p>(간단한 설명: 위치와 거리 등)</p>
      </div>
    </>
  );
}

function Attraction() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content_sub">
        <div className="inner">
          <div className="content_main">
            <AttractionTitle />
            <AttractionContents />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Attraction;
