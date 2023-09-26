import './App.css';

function MainTitle() {
    return (
        <div className="main_headline">  
            <div className="inner">
                <h2>About 'Eight Fore'</h2>
                <div className="m_line inner"></div>
                <div className="main_txt">
                    <p>글램핑, 바베큐장, 계곡 등 자연친화적인 공간에서 사랑하는 사람들과 행복한 시간을 보내세요.
                    <a href="sub/notice_aboutus.html">소개 바로가기</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

function MainContents() {
  return (
    <div id="main">
        <section id="main_content">
            <MainTitle />

            <div className="content">
                <div className="inner">
                    <div className="content_title">
                        <div>
                            <h3>The Valley</h3>
                            <p>에잇포레에서 자연과 함께하는 최고의 하루를 보내세요.</p>
                        </div>
                    </div>

                    <div className="content_img">
                        <div>
                        <img src="images/valley.jpg" alt="계곡" />
                        </div>
                        <div className="more">
                            <p><a href="sub/notice_attraction.html">00계곡 자세히보기</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="inner">
                    <div className="content_title">
                        <div>
                            <h3>Glamping</h3>
                            <p>에잇포레의 글램핑장에서 바베큐를 즐겨보세요.</p>
                        </div>
                    </div>

                    <div className="content_img">
                        <div>
                            <img src="images/glamping.jpg" alt="글램핑" />
                        </div>
                        <div className="more">
                            <p><a href="sub/outdoor_glamping.html">글램핑 자세히보기</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="inner">
                    <div className="content_title">
                        <div>
                            <h3>The Way to Come</h3>
                            <p>경주 바닷길을 따라 오시면 000평 규모의 에잇포레 호텔이 있습니다.</p>
                        </div>
                    </div>

                    <div className="content_img">
                        <div><img src="images/waytocome.jpg" alt="오시는길" /></div>
                        <div className="more">
                            <p><a href="sub/notice_way.html">오시는길 자세히보기</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default MainContents;
