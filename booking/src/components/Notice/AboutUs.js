import "../App.css";
import "./AboutUs.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SelectBox from "../common/SelectBox";
import AboutUsData from "../../AboutUsList.json";

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

function AboutUsContents({
  number,
  title,
  englishTitle,
  imageSrc,
  imageAlt,
  subTitle,
  description,
  layout,
}) {
  return (
    <>
      <div class="content_aboutus">
        <div className={`aboutus_list_${layout} inner`}>
          <div class="top">
            <h2>{number}</h2>
            <div class={`top_${layout}`}>
              <div class="line"></div>
              <h3>{title}</h3>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom_img">
              <img src={imageSrc} alt={imageAlt} />
              <p class={`english_${layout}`}>{englishTitle}</p>
            </div>
            <div class="bottom_txt">
              <p>
                <b>{subTitle}</b>
              </p>
              <p>{description}</p>
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
            <AboutUsTitle />
            <AboutUsHeadline />
          </div>

          <div id="noticeList"></div>

          {AboutUsData.map((section, index) => (
            <AboutUsContents key={index} {...section} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
