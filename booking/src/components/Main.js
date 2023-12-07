import "./App.css";
import "./Main.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import contentData from "./data/MainContentsList.json";
import Reservation from "./Reservation/Reservation";

function MainTitle({ index }) {
  const MainTitleData = [
    {
      headline: "About Eight Fore",
      content:
        "글램핑, 바베큐장, 계곡 등 자연친화적인 공간에서 사랑하는 사람들과 행복한 시간을 보내세요.",
    },
    {
      headline: "The Resort for Group",
      content:
        "체육대회, 단체 바베큐, 세미나 등 기업 연수를 에잇포레와 함께 하세요.",
    },
    {
      headline: "Glamping&BBQ",
      content: "계곡이 있는 글램핑장에서 멋진 하루를 보내세요.",
    },
  ];

  const title = MainTitleData[index];

  return (
    <div className="main_headline">
      <div className="inner">
        <h2>{title.headline}</h2>
        <div className="m_line inner"></div>
        <div className="main_txt">
          <p>{title.content}</p>
          <Link to="/Notice/AboutUs">더보기</Link>
        </div>
      </div>
    </div>
  );
}

function MainContentsList({ contents }) {
  return (
    <>
      {contents.map((txt) => (
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
                <p>
                  <Link href="sub/notice_attraction.html">
                    {txt.alt} 자세히보기
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("mainIndividual");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    { id: "mainIndividual", label: "개인" },
    { id: "mainGroup", label: "단체" },
    { id: "mainGlamping", label: "글램핑" },
  ];

  const categoryMap = {
    mainIndividual: 0,
    mainGroup: 1,
    mainGlamping: 2,
  };

  return (
    <div id="main">
      <section id="main_visual">
        <div className="main_img">
          <img src="images/main.jpg" alt="메인이미지" />
        </div>

        <div className="main_part">
          <ul className="max_inner">
            {categories.map((category) => (
              <li
                key={category.id}
                className={selectedCategory === category.id ? "active" : ""}
              >
                <button onClick={() => handleButtonClick(category.id)}>
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="booking">
          <div className="inner">
            <div className="btn">
              <Link to="/Reservation/Reservation">예약하기</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="main_content">
        <MainTitle index={categoryMap[selectedCategory]} />
        <MainContentsList contents={contentData[selectedCategory]} />
      </section>
    </div>
  );
}

export default Main;
