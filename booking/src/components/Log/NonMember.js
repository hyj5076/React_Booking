import "../App.css";
import "./NonMember.css";
import { Link } from "react-router-dom";

function NonMember() {
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
                    <form className="rl_2">
                      <input type="text" placeholder="성함(이름)" />
                    </form>
                  </li>
                  <li>
                    <form className="rl_2">
                      <input type="text" placeholder="연락처(전화번호)" />
                    </form>
                  </li>
                  <li>
                    <Link>비회원 로그인</Link>
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
