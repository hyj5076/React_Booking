import "../App.css";
import "./Gallery.css";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";

function GalleryTitle() {
  return (
    <>
      <div className="content_title center">
        <h3>Map&Gallery</h3>
        <p>
          에잇포레 이용안내에 대한 예시 설명입니다.
          <br />
          모던과 클래식, 도시와 자연이 공존하는 안락한 휴식의 시간을 선물할
          것입니다.
        </p>
      </div>
    </>
  );
}

function GalleryLoadMap() {
  return (
    <>
      <div className="content_basic">
        <h4>전체 안내도</h4>
        <div className="content_img">
          <img src="/images/sub/loadmap.JPG" alt="배치도" />
        </div>
      </div>
    </>
  );
}

function GalleryPictures() {
  return (
    <>
      <div className="content_basic">
        <h4>갤러리</h4>
        <div className="content_img">
          <img src="/images/sub/gallery.jpg" alt="갤러리" />
          <div className="arrow_left">
            <i className="bi bi-arrow-left-circle-fill"></i>
          </div>
          <div className="arrow_right">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
}

function Gallery() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div className="inner">
          <div className="content_main">
            <GalleryTitle />
            <GalleryLoadMap />
            <GalleryPictures />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
