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
                    <li className="active"><button href="index.html">개인</button></li>
                    <li><button href="index0.html">단체</button></li>
                    <li><button href="index1.html">글램핑</button></li>
                </ul>
            </div>

            <div className="booking">
                <div className="inner">
                    <div className="btn">
                        <button href="sub/room_1reserv_1.2.html">예약하기</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Main;
