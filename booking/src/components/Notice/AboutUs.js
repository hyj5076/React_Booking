import "../App.css";
import "./AboutUs.css";
//import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SelectBox from "../common/SelectBox";

function AboutUsTitle() {
  return (
    <>
      <div class="content_title center max_inner">
        <h3>About us</h3>
        <p>
          '에잇포레(Eight Fore)'는
          <br />
          숫자 8(eight)과 숲(forest)을 담은 이름으로,
          <br />
          8가지의 인프라가 구축되어있는 자연 속의 리조트 입니다.
        </p>
      </div>
    </>
  );
}

function AboutUsHeadline() {
  return (
    <>
      <div class="title_aboutus max_inner">
        <div>
          <h2>08</h2>
          <div class="line"></div>
        </div>
        <div>
          <div class="line"></div>
          <div class="keypoint">
            <h4>KEYPOINT</h4>
            <p>에잇포레의 여덟가지 인프라를 만나보세요.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutUsContents() {
  return (
    <>
      <div class="content_aboutus">
        <div class="aboutus_list inner">
          <div class="top">
            <h2>01</h2>
            <div class="top_left">
              <div class="line"></div>
              <h3>옥상 팔각정</h3>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom_img">
              <img src="/images/sub/outdoor_octagon.jfif" alt="옥상 팔각정" />
              <p class="english_left">THE OCTAGON PAVILION ON THE ROOFTOP</p>
            </div>
            <div class="bottom_txt">
              <p>
                <span>옥상 팔각정은 팔각루프탑으로 운영 예정입니다.</span>
              </p>
              <p>
                체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한
                서비스가 더해져 최고의 만족을 안겨드립니다.
              </p>
            </div>
          </div>
        </div>
        <div class="graybox"></div>
      </div>

      <div class="content_aboutus">
        <div class="aboutus_list_right inner">
          <div class="top">
            <div class="top_right">
              <div class="line"></div>
              <h3>정육식당</h3>
            </div>
            <h2>02</h2>
          </div>
          <div class="bottom">
            <div class="bottom_img">
              <img src="/images/sub/about_beef.JPG" alt="정육식당" />
              <p class="english_right">THE MEAT RESTAURANT IN THE 8FORE</p>
            </div>
            <div class="bottom_txt right">
              <p>
                <span>시설 내 온라인 판매가격 수준의 도소매 정육식당</span>
              </p>
              <p>
                체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한
                서비스가 더해져 최고의 만족을 안겨드립니다.
              </p>
            </div>
          </div>
        </div>
        <div class="graybox"></div>
      </div>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div class="content_main">
          <div class="content_title_sub">
            {<AboutUsTitle />}
            {<AboutUsHeadline />}
          </div>

          <div id="noticeList"></div>

          {<AboutUsContents />}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
