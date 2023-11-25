import "../App.css";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";
import "./Way.css";
import { Link } from "react-router-dom";

function WayTitle() {
  return (
    <>
      <div class="content_title center">
        <h3>The Way to Come</h3>
      </div>
    </>
  );
}

function WayMap() {
  return (
    <>
      <div class="content_img">
        <img src="/images/sub/notice_map.PNG" alt="지도" />
      </div>
    </>
  );
}

function WayAddress() {
  return (
    <>
      <div class="content_box">
        <h4>상세주소</h4>
        <div class="box">
          <div class="box_address">
            <p>
              경주시 양남면 산에들레길 301-18
              <Link>
                <i class="bi bi-link-45deg"></i>
              </Link>
            </p>
            <Link>
              <i class="bi bi-geo-alt-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Way() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div class="inner">
          <div class="content_main">
            <WayTitle />
            <WayMap />
            <WayAddress />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Way;
