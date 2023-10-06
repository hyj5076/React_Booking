import { useEffect } from 'react';
import '../App.css';
import './Nav.css';
import { Link } from 'react-router-dom';


function Menu() {

    useEffect(() => {
        // 초기 설정: 첫 번째 하위 메뉴를 표시하고 나머지를 숨김.
        const firstSubmenu = document.querySelector('.menu > ul > li:first-child > ul');

        if (firstSubmenu) {
            firstSubmenu.style.display = 'block';
        }

        const otherSubmenus = document.querySelectorAll('.submenu:not(.menu > ul > li:first-child > ul)');

        otherSubmenus.forEach(submenu => {
            submenu.style.display = 'none';
        });

        // 메뉴 항목 클릭 이벤트 핸들러
        const menuItems = document.querySelectorAll('.menu > ul > li');

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function() {
                // 클릭된 항목의 하위 메뉴를 표시
                const submenu = this.querySelector('.submenu');

                if (submenu) {
                    submenu.style.display = 'block';
                }

                // 다른 항목의 하위 메뉴를 숨김
                const siblingSubmenus = this.parentNode.querySelectorAll('.submenu');

                siblingSubmenus.forEach(sibSubmenu => {
                    if (sibSubmenu !== submenu) {
                        sibSubmenu.style.display = 'none';
                    }
                });

                // active 클래스 적용
                menuItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });

    const menuData = [
        {
            title: "객실",
            link: "#",
            submenu: [
                { title: "전체객실타입", link: "" },
                { title: "더블룸", link: "" },
                { title: "트윈룸", link: "" },
                { title: "트리플룸", link: "" },
                { title: "패밀리룸", link: "" },
                { title: "단체룸", link: "" },
                { title: "단체룸", link: "" },
            ]
        },
        {
            title: "단체",
            link: "#",
            submenu: [
                { title: "단체견적문의", link: "" },
                { title: "단체연수후기", link: "" }
            ]
        },
        {
            title: "글램핑",
            link: "#",
            submenu: [
                { title: "글램핑", link: "" },
                { title: "바베큐장", link: "" }
            ]
        },
        {
            title: "실내시설",
            link: "#",
            submenu: [
                { title: "전체실내시설", link: "" },
                { title: "소강당/노래방", link: "" },
                { title: "세미나실", link: "" },
                { title: "탁구장/당구장", link: "" },
                { title: "식당", link: "" }
            ]
        },
        {
            title: "야외시설",
            link: "#",
            submenu: [
                { title: "전체야외시설", link: "" },
                { title: "글램핑/바베큐장", link: "" },
                { title: "소규모운동장", link: "" },
                { title: "체육대회소품", link: "" },
                { title: "루프팔각탑", link: "" }
            ]
        },
        {
            title: "이용안내",
            link: "#",
            submenu: [
                { title: "에잇포레 소개", link: "" },
                { title: "오시는길", link: "" },
                { title: "배치도&갤러리", link: "" },
                { title: "주변놀거리", link: "" },
                { title: "이벤트", link: "" }
            ]
        }
    ];
    

    return (
        <div className="menu">
            <h3>menu</h3>
            <ul>
                {menuData.map((menuItem, index) => (
                    <li className={index === 0 ? "active" : ""}>
                        <a href={menuItem.link}>{menuItem.title}</a>
                        <ul className="submenu">
                            {menuItem.submenu.map(subItem => (
                                <li><a href={subItem.link || "#"}>{subItem.title}</a></li>
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
        <div className="nav" id="navCommonMain">
            <div className="nav_header">
                <div className="inner spacebetween">
                    <p className="back">
                        <a href=""><i className="bi bi-arrow-left-short"></i></a>
                    </p>
                    <h1>
                        <Link to="/">
                        <img src="/images/logo_white.png" alt="로고" />
                        </Link>
                    </h1>
                    <p className="close">
                        <a href="#"><i className="bi bi-x"></i></a>
                    </p>
                </div>
            </div>
            
            <div className="nav_menu max_inner">   
                <div className="nav_title">
                    <h2>reservation</h2>
                    <div className="nav_login">
                        <a href="">로그인</a>
                        <a href="">비회원예약</a>
                    </div>
                </div>

                <div className="nav_title">
                    <ul>
                        <li className="border-right"><a href="">예약현황</a></li>
                        <li className="border-right"><a href="">예약하기</a></li>
                        <li><a href="">예약확인/취소</a></li>
                    </ul>
                </div>
            
                <Menu />
            </div>
        </div>
    );
}

export default Nav;