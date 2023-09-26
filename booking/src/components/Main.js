import './App.css';

function Main() {
  return (
    <div id="main">
        <section id="main_visual">
            <div className="main_img">
                <img src="images/main.jpg"/>
            </div>

            <div className="main_part">
                <ul className="max_inner">
                    <li className="active"><a href="index.html">개인</a></li>
                    <li><a href="index0.html">단체</a></li>
                    <li><a href="index1.html">글램핑</a></li>
                </ul>
            </div>

            <div className="booking">
                <div className="inner">
                    <div className="btn">
                        <a href="sub/room_1reserv_1.2.html">예약하기</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Main;
