import { useEffect } from 'react';
import '../App.css';
import './Nav.css';
import { Link } from 'react-router-dom';


function Menu() {
    //const [ menuClick, setMenuClick ] = useState();

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

                // 다른 메뉴 항목들의 active 클래스를 제거하고 현재 클릭된 항목에 active 클래스 추가
                menuItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            });
        });


    });

    return (
        <div className="menu">
            <h3>menu</h3>
            <ul>
                <li className="active">
                    <a href="#">객실</a>
                    <ul className="submenu">
                        <li><a href="/booking/sub/room.html">전체객실타입</a></li>
                        <li><a href="/booking/sub/room_detail.html">더블룸</a></li>
                        <li><a>트윈룸</a></li>
                        <li><a>트리플룸</a></li>
                        <li><a>패밀리룸</a></li>
                        <li><a>단체룸</a></li>
                        <li><a>키즈룸</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">단체</a>
                    <ul className="submenu">
                        <li><a href="/booking/sub/group_reserv.html">단체견적문의</a></li>
                        <li><a>단체연수후기</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">글램핑</a>
                    <ul className="submenu">
                        <li><a>글램핑</a></li>
                        <li><a>바베큐장</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">실내시설</a>
                    <ul className="submenu">
                        <li><a href="">전체실내시설</a></li>
                        <li><a href="/booking/sub/others_detail.html">소강당/노래방</a></li>
                        <li><a>세미나실</a></li>
                        <li><a>탁구장/당구장</a></li>
                        <li><a>식당</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">야외시설</a>
                    <ul className="submenu">
                        <li><a>전체야외시설</a></li>
                        <li><a>글램핑/바베큐장</a></li>
                        <li><a>소규모운동장</a></li>
                        <li><a>체육대회소품</a></li>
                        <li><a>루프팔각탑</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">이용안내</a>
                    <ul className="submenu">
                        <li><a href="/booking/sub/notice_aboutus.html">소개</a></li>
                        <li><a href="/booking/sub/notice_way.html">오시는길</a></li>
                        <li><a href="/booking/sub/notice_gallery.html">배치도&갤러리</a></li>
                        <li><a href="/booking/sub/notice_attraction.html">주변놀거리</a></li>
                        <li><a href="/booking/sub/notice_event.html">이벤트</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

function Nav() {
  return (
    <div className="nav" id="navCommonMain">
        <div className="nav_header">
            <div className="inner spacebetween">
                <p className="back"><a href=""><i className="bi bi-arrow-left-short"></i></a></p>
                <h1><Link to="/"><img src="/images/logo_white.png" alt="로고" /></Link></h1>
                <p className="close"><a href="#"><i className="bi bi-x"></i></a></p>
            </div>
        </div>
        
        <div className="nav_menu max_inner">   
            <div className="nav_title">
                <h2>reservation</h2>
                <div className="nav_login">
                    <a href="/booking/sub/login_1.2.html">로그인</a>
                    <a href="/booking/sub/login_2.2.html">비회원예약</a>
                </div>
            </div>

            <div className="nav_title">
                <ul>
                    <li className="border-right"><a href="/booking/sub/room_calendar_monthly.html">예약현황</a></li>
                    <li className="border-right"><a href="/booking/sub/room_1reserv_1.2.html">예약하기</a></li>
                    <li><a href="/booking/sub/room_3reserv_1.4.html">예약확인/취소</a></li>
                </ul>
            </div>
        
            <Menu />
        </div>
    </div>
  );
}

export default Nav;