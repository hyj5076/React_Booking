import { Link } from "react-router-dom";
import "../App.css";
import "./Facility.css";

function Outdoor() {
  return (
    <>
      <section id="content">
        <div class="inner">
          <div class="content_main">
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
            <div class="content_img">
              <img src="/booking/images/sub/Outdoor_audi.jpg" alt="소강당" />
            </div>
            <div class="content_btn type_others">
              <div class="btn">
                <Link href="#">공유하기</Link>
              </div>
              <div class="btn">
                <Link href="/booking/sub/room_1reserv_1.2.html">예약하기</Link>
              </div>
            </div>

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

            {/* <div class="others_notice">
              <h4>안내사항</h4>
              <div>
                <p>안내사항을 지켜주세요.</p>
                <p>안내사항을 지켜주세요.</p>
                <p>안내사항을 지켜주세요.</p>
                <p>안내사항을 지켜주세요.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Outdoor;
