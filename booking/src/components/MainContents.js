import './App.css';


function MainTitle() {
    const MainTitleData = [
        {
            headline: "About Eight Fore",
            content: "글램핑, 바베큐장, 계곡 등 자연친화적인 공간에서 사랑하는 사람들과 행복한 시간을 보내세요."
        },
        {
            headline: "The Resort for Group",
            content: "체육대회, 단체 바베큐, 세미나 등 기업 연수를 에잇포레와 함께 하세요."
        },
        {
            headline: "Glamping&BBQ",
            content: "계곡이 있는 글램핑장에서 멋진 하루를 보내세요."
        }
    ];

    return (
        <>
        {MainTitleData(title => (
            <div className="main_headline">  
                <div className="inner">
                    <h2>{title.headline}</h2>
                    <div className="m_line inner"></div>
                    <div className="main_txt">
                        <p>{title.content}
                        <a href="sub/notice_aboutus.html">소개 바로가기</a>
                        </p>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}

function MainContentsList({ contents }) {
    return (
        <>
        {contents.map(txt => (
        <div className="content">
            <div className="inner">
                <div className="content_title">
                    <div>
                        <h3>{txt.title}</h3>
                        <p>{txt.content}</p>
                    </div>
                </div>

                <div className="content_img">
                    <div>
                        <img src={txt.image} alt={txt.alt} />
                    </div>
                    <div className="more">
                        <p><a href="sub/notice_attraction.html">{txt.alt} 자세히보기</a></p>
                    </div>
                </div>
            </div>
        </div>
        ))}
        </>
    );
}

function MainContents() {
  return (
    <div id="main">
        <section id="main_content">
            <MainTitle />
            <MainContentsList />
        </section>
    </div>
  );
}

export default MainContents;
