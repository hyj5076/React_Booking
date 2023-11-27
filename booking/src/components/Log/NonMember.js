import "../App.css";
import "./NonMember.css";
import { Link } from "react-router-dom";

function NonMember() {
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
                    <form class="rl_2">
                      <input type="text" placeholder="성함(이름)" />
                    </form>
                  </li>
                  <li>
                    <form class="rl_2">
                      <input type="text" placeholder="연락처(전화번호)" />
                    </form>
                  </li>
                  <li>
                    <Link href="#">비회원 로그인</Link>
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

export default NonMember;
