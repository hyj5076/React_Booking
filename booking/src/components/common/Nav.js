import "../App.css";
import "./Nav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/NavMenuList.json";

function Submenu({ items, visible, baseLink }) {
  return (
    <ul className="submenu" style={{ display: visible ? "block" : "none" }}>
      {items.map((subItem) => (
        <li>
          <Link className="submenu-btn" to={`${baseLink}/${subItem.linkPath}`}>
            {subItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Menu({ text }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 처음 렌더링시에만 첫 번째 하위 메뉴를 표시
    setActiveIndex(0);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="menu">
      <h3>menu</h3>
      <ul>
        {text.map((menuItem, index) => (
          <li
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleItemClick(index)}
          >
            <button>{menuItem.title}</button>
            <Submenu
              items={menuItem.submenu}
              visible={index === activeIndex}
              baseLink={menuItem.baseLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <div className="nav_header">
        <div className="inner spacebetween">
          <p className="back">
            <button>
              <i className="bi bi-arrow-left-short"></i>
            </button>
          </p>
          <h1>
            <Link to="/">
              <img src="/images/logo_white.png" alt="로고" />
            </Link>
          </h1>
          <p className="close">
            <button href="#">
              <i className="bi bi-x"></i>
            </button>
          </p>
        </div>
      </div>

      <div className="nav_menu max_inner">
        <div className="nav_title">
          <h2>reservation</h2>
          <div className="nav_login">
            <button>
              <Link to="/Log/Member">로그인</Link>
            </button>
            <button>
              <Link to="/Log/NonMember">비회원예약</Link>
            </button>
          </div>
        </div>

        <div className="nav_title">
          <ul>
            <li className="border-right">
              <button>예약현황</button>
            </li>
            <li className="border-right">
              <button>예약하기</button>
            </li>
            <li>
              <button>예약확인/취소</button>
            </li>
          </ul>
        </div>

        <Menu text={menuData.NavMenuData} />
      </div>
    </div>
  );
}

export default Nav;
