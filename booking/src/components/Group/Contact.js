import "../App.css";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SelectBox from "../common/SelectBox";
import "./Contact.css";
import { Link } from "react-router-dom";

function GroupContactTitle() {
  return (
    <>
      <div class="content_txt inner">
        <h4>단체견적문의</h4>
        <p>30인 이상 기업 및 단체 예약 시 단체견적문의서를 작성해주세요.</p>
        <p>
          *바로 예약하실 분은{" "}
          <a href="/sub/room_1reserv_1.2.html">개인 예약 페이지</a>로 이동해
          주세요.
        </p>
      </div>
    </>
  );
}

function GroupCall() {
  return (
    <>
      <div class="content_call">
        <div class="max_inner">
          <h4>고객문의</h4>
          <p>1588-0000</p>
          <div class="telicon">
            <i class="bi bi-telephone-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
}

function GroupForm() {
  return (
    <>
      <div class="content_form">
        <div class="inner">
          <div class="reserv_form">
            <h4>단체예약 견적문의서</h4>

            <div class="reserv_list">
              <form class="rl_1">
                <div>
                  <input type="radio" name="chk_info" value="HTML" /> 기업
                </div>
                <div>
                  <input type="radio" name="chk_info" value="CSS" /> 기타
                  단체/모임
                </div>
              </form>
            </div>

            <div class="reserv_list">
              <p>기업(단체)명</p>
              <form class="rl_2">
                <div>
                  <input
                    id="input1"
                    type="text"
                    placeholder="기업명(단체명)을 입력해주세요."
                  />
                </div>
              </form>
            </div>

            <div class="reserv_list">
              <p>참여 인원 수</p>
              <form class="rl_2">
                <input
                  id="input1"
                  type="text"
                  size="50"
                  placeholder="참여 인원수를 입력해주세요."
                />
              </form>
            </div>

            <div class="reserv_list">
              <p>예약기간 및 숙박일수</p>
              <div class="date">
                <form>
                  <div>
                    <input id="input0" type="date" value="2023-03-20" />
                    <p>-</p>
                    <input id="input0" type="date" value="2023-03-20" />
                  </div>
                </form>
                <div>
                  <p>1박</p>
                </div>
              </div>
            </div>

            <div class="reserv_list">
              <p>연락처</p>
              <form>
                <div>
                  <input
                    id="input2"
                    type="tel"
                    size="10"
                    pattern="[0-9]{3}"
                    required
                  />{" "}
                  -{" "}
                  <input
                    id="input2"
                    type="tel"
                    size="10"
                    pattern="[0-9]{4}"
                    required
                  />{" "}
                  -{" "}
                  <input
                    id="input2"
                    type="tel"
                    size="10"
                    pattern="[0-9]{4}"
                    required
                  />
                </div>
              </form>
            </div>

            <div class="reserv_list">
              <p>E-MAIL</p>
              <form class="rl_2">
                <div>
                  <input id="input1" type="email" pattern=".+@globex\.com" />
                </div>
              </form>
            </div>

            <div class="reserv_list">
              <p>옵션선택</p>
              <form class="rl_5">
                <div>
                  <input type="checkbox" />
                  <label for="scales">단체 바베큐</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">조식</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">중식</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">석식</label>
                </div>
              </form>
              <form class="rl_5">
                <div>
                  <input type="checkbox" />
                  <label for="scales">세미나룸</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">소운동장</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">체육대회 소품</label>
                </div>
              </form>
              <form class="rl_5">
                <div>
                  <input type="checkbox" />
                  <label for="scales">노래방</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">탁구장</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label for="scales">당구장</label>
                </div>
              </form>
            </div>

            <div class="reserv_list">
              <p>기타문의사항</p>
              <form>
                <div>
                  <textarea id="question" rows="8"></textarea>
                </div>
              </form>
            </div>
          </div>

          <div class="btn_long">
            <div class="btn0">
              <Link href="#">단체예약 문의하기</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GroupContact() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div class="content_group back_gray">
          <GroupContactTitle />
          <GroupCall />
          <GroupForm />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default GroupContact;
