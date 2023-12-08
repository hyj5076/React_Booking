import "../App.css";
import "./AboutUs.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SelectBox from "../common/SelectBox";
import AboutUsData from "../data/AboutUsList.json";

function AboutUsTitle() {
  return (
    <>
      <div className="content_title center max_inner">
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
      <div className="title_aboutus max_inner">
        <div>
          <h2>08</h2>
          <div className="line"></div>
        </div>
        <div>
          <div className="line"></div>
          <div className="keypoint">
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
      <div className="content_aboutus">
        <div classNameName={`aboutus_list_${layout} max_inner`}>
          <div className="top">
            {layout === "left" && (
              <>
                <h2>{number}</h2>
                <div className={`top_${layout}`}>
                  <div className="line"></div>
                  <h3>{title}</h3>
                </div>
              </>
            )}
            {layout === "right" && (
              <>
                <div className={`top_${layout}`}>
                  <div className="line"></div>
                  <h3>{title}</h3>
                </div>
                <h2>{number}</h2>
              </>
            )}
          </div>
          <div className="bottom">
            <div className="bottom_img">
              <img src={imageSrc} alt={imageAlt} />
              <p className={`english_${layout}`}>{englishTitle}</p>
            </div>
            <div className={`bottom_txt_${layout}`}>
              <p>
                <b>{subTitle}</b>
              </p>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="graybox"></div>
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
        <div className="content_main">
          <div className="content_title_sub">
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
