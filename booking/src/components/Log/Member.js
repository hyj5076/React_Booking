import "../App.css";
import "./Member.css";
import { Link } from "react-router-dom";

function Member() {
  return (
    <>
      <section id="loginpage">
        <div className="login">
          <div className="login_title">
            <h2>LogIn</h2>
          </div>
          <div className="login_main">
            <div className="inner">
              <div className="login_name">
                <h2>Eight Fore</h2>
                <p className="rg">resort & glamping</p>
              </div>
              <div className="login_btn">
                <ul>
                  <li>
                    <Link href="/sub/room_reserv2.3.html">
                      비회원으로 예약하기
                    </Link>
                  </li>
                  <li>
                    <Link>회원으로 예약하기</Link>
                  </li>
                </ul>
              </div>
              <div className="login_sns">
                <ul>
                  <li>
                    <Link>회원가입</Link>
                  </li>
                  <li>
                    <Link>아이디/비밀번호 찾기</Link>
                  </li>
                </ul>
              </div>
              <div className="login_icon">
                <ul>
                  <li>
                    <Link>
                      <img
                        src="/images/sub/icon_kakao.png"
                        alt="카카오로그인"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src="/images/sub/icon_google.png" alt="구글로그인" />
                    </Link>
                  </li>
                  <li>
                    <Link>
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
