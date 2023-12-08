import "../App.css";
import "./Event.css";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";

function EventTitle() {
  return (
    <>
      <div className="content_title center">
        <h3>Special Event</h3>
        <p>
          에잇포레의 이벤트에 대한 예시 설명입니다.
          <br />
          모던과 클래식, 도시와 자연이 공존하는 안락한 휴식의 시간을 선물할
          것입니다.
        </p>
      </div>
    </>
  );
}

function EventContents() {
  return (
    <>
      <div className="content_basic">
        <div className="card">
          <h4>EIGHTFORE 생일 축하 이벤트</h4>

          <div className="card_img swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="/images/sub/event0.jpg" alt="01" />
              </div>
              <div className="swiper-slide">
                <img src="/images/sub/event1.jpg" alt="02" />
              </div>
              <div className="swiper-slide">
                <img src="/images/sub/attrac0.jpg" alt="03" />
              </div>
              <div className="swiper-slide">
                <img src="/images/sub/gallery.jpg" alt="04" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <p className="card_date">2023.01.01-2023.12.31</p>
          <p>생일을 맞은 13세 이하 어린이에게 랜덤 기프트 세트를 드립니다.</p>
        </div>
      </div>
    </>
  );
}

function Event() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content_sub">
        <div className="inner">
          <div className="content_main">
            <EventTitle />
            <EventContents />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Event;
