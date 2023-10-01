import './App.css';

function Footer() {
  return (
    <div id="footer">
        <div className="footer_h1 max_inner">
            <img src="images/logo.png" alt="푸터로고" />
            <p>에잇포레 리조트&글램핑</p>
        </div>

        <div className="inner">
            <div className="company">
                <p>경주시 양남면 산에들레길 301-18</p>
                <p>대표이사 강동원</p>
                <p>T.1234 - 1234</p>
                <p>사업자등록번호 123-45-678910</p>
                <p>통신판매신고번호 0구 1234호</p>
            </div>

            <div className="gnb">
                <ul>
                    <li><a href="">고객센터</a></li>
                    <li><a href="">웹사이트이용약관</a></li>
                    <li><a href="">이메일무단수집금지</a></li>
                </ul>
                <ul>
                    <li><a href="">영상정보처리기기운영·관리방침</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">호텔정책</a></li>
                </ul>
            </div>
        </div>

        <div className="copy">
            <p>Copyright © 2023 EIGHTFORE RESORT & GLAMPING. <br/> Co. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
