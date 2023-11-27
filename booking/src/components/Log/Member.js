import "../App.css";
import "./Member.css";
import { Link } from "react-router-dom";

function Member() {
  return (
    <>
      <section id="loginpage">
        <div class="login">
          <div class="login_title">
            <h2>LogIn</h2>
          </div>
          <div class="login_main">
            <div class="inner">
              <div class="login_name">
                <h2>Eight Fore</h2>
                <p class="rg">resort & glamping</p>
              </div>
              <div class="login_btn">
                <ul>
                  <li>
                    <Link href="/sub/room_reserv2.3.html">
                      비회원으로 예약하기
                    </Link>
                  </li>
                  <li>
                    <Link href="#">회원으로 예약하기</Link>
                  </li>
                </ul>
              </div>
              <div class="login_sns">
                <ul>
                  <li>
                    <Link href="#">회원가입</Link>
                  </li>
                  <li>
                    <Link href="#">아이디/비밀번호 찾기</Link>
                  </li>
                </ul>
              </div>
              <div class="login_icon">
                <ul>
                  <li>
                    <Link href="#">
                      <img
                        src="/images/sub/icon_kakao.png"
                        alt="카카오로그인"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="/images/sub/icon_google.png" alt="구글로그인" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img
                        src="/images/sub/icon_naver.png"
                        alt="네이버로그인"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Member;
