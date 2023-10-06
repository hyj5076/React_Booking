import { useEffect, useState } from 'react';
import '../App.css';
import './Nav.css';
import { Link } from 'react-router-dom';


function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // 처음 렌더링시에만 첫 번째 하위 메뉴를 표시
        setActiveIndex(0);
    }, []);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const menuData = [
        {
            title: "객실",
            submenu: [
                { title: "전체객실타입"},
                { title: "더블룸"},
                { title: "트윈룸"},
                { title: "트리플룸"},
                { title: "패밀리룸"},
                { title: "단체룸"},
                { title: "단체룸"},
            ]
        },
        {
            title: "단체",
            submenu: [
                { title: "단체견적문의"},
                { title: "단체연수후기"}
            ]
        },
        {
            title: "글램핑",
            submenu: [
                { title: "글램핑"},
                { title: "바베큐장"}
            ]
        },
        {
            title: "실내시설",
            submenu: [
                { title: "전체실내시설"},
                { title: "소강당/노래방"},
                { title: "세미나실"},
                { title: "탁구장/당구장"},
                { title: "식당"}
            ]
        },
        {
            title: "야외시설",
            submenu: [
                { title: "전체야외시설"},
                { title: "글램핑/바베큐장"},
                { title: "소규모운동장"},
                { title: "체육대회소품"},
                { title: "루프팔각탑"}
            ]
        },
        {
            title: "이용안내",
            submenu: [
                { title: "에잇포레 소개"},
                { title: "오시는길"},
                { title: "배치도&갤러리"},
                { title: "주변놀거리"},
                { title: "이벤트"}
            ]
        }
    ];
    
    return (
        <div className="menu">
            <h3>menu</h3>
            <ul>
                {menuData.map((menuItem, index) => (
                     <li className={index === activeIndex ? "active" : ""} onClick={() => handleItemClick(index)}>
                        <button>{menuItem.title}</button>
                        <ul className="submenu" style={{display: index === activeIndex ? 'block' : 'none'}}>
                            {menuItem.submenu.map(subItem => (
                                <li><button>{subItem.title}</button></li>
                            ))}
                        </ul>
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
                        <button><i className="bi bi-arrow-left-short"></i></button>
                    </p>
                    <h1>
                        <Link to="/">
                        <img src="/images/logo_white.png" alt="로고" />
                        </Link>
                    </h1>
                    <p className="close">
                        <button href="#"><i className="bi bi-x"></i></button>
                    </p>
                </div>
            </div>
            
            <div className="nav_menu max_inner">   
                <div className="nav_title">
                    <h2>reservation</h2>
                    <div className="nav_login">
                        <button>로그인</button>
                        <button>비회원예약</button>
                    </div>
                </div>

                <div className="nav_title">
                    <ul>
                        <li className="border-right"><button>예약현황</button></li>
                        <li className="border-right"><button>예약하기</button></li>
                        <li><button>예약확인/취소</button></li>
                    </ul>
                </div>
            
                <Menu />
            </div>
        </div>
    );
}

export default Nav;