import '../App.css';
import './RoomDetail.css';

function RoomDetail() {
    
    return (
        <section id="content">
            <div class="inner">
                <div class="content_main">
                    <div class="content_title center">
                        <h3>Double Room</h3>
                        <p>에잇포레 룸타입에 대한 예시 설명입니다.
                            <br />
                            모던과 클래식, 도시와 자연이 공존하는 
                            안락한 휴식의 시간을 선물할 것입니다.
                        </p>
                    </div>

                    <div class="content_img">
                        <img src="/images/sub/room_double.jpg" alt="더블룸" />
                    </div>
                    
                    <div class="content_btn">
                        <div class="btn"><a href="">공유하기</a></div>
                        <div class="btn"><a href="/sub/room_1reserv_1.2.html">예약하기</a></div>
                    </div>

                    <div class="roomspec">
                        <div class="box">
                            <div>
                                <h3>location</h3>
                                <p>객실</p>
                            </div>
                            <div>
                                <h3>beds</h3>
                                <p>더블</p>
                            </div>
                            <div>
                                <h3>size</h3>
                                <p>30㎡</p>
                            </div>
                        </div>
                        <div class="box">
                            <div>
                                <h3>room</h3>
                                <p>침실1, 화장실1</p>
                            </div>
                            <div>
                                <h3>check-in/out</h3>
                                <p>15:00<span>/</span>11:00</p>
                            </div>
                            <div>
                                <h3>view</h3>
                                <p>가든뷰, 계곡뷰</p>
                            </div>
                        </div>
                    </div>

                    <div class="content_box amenity">
                        <h4>객실 어메니티</h4>
                        <div class="box">
                            <div>
                                <h3 class="title_amenity">bath room</h3>
                                <div class="spacebetween">
                                    <div class="left">
                                        <p>목욕가운</p>
                                        <p>비데</p>
                                        <p>빗</p>
                                    </div>
                                    <div class="right">
                                        <p>샤워캡</p>
                                        <p>욕조or샤워부스</p>
                                        <p>헤어드라이어</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 class="title_amenity">bed room</h3>
                                <div class="spacebetween">
                                    <div class="left">
                                        <p>TV</p>
                                        <p>스피커</p>
                                        <p>220V</p>
                                    </div>
                                    <div class="right">
                                        <p>침대</p>
                                        <p>전화기</p>
                                        <p>냉난방</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 class="title_amenity">mini var</h3>
                                <div class="spacebetween">
                                    <div class="left">
                                        <p>냉장고</p>
                                        <p>커피머신</p>
                                        <p>스낵</p>
                                    </div>
                                    <div class="right">
                                        <p>전기주전자</p>
                                        <p>생수&티</p>
                                        <p>컵</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 class="title_amenity">closet</h3>
                                <div class="spacebetween">
                                    <div class="left">
                                        <p>슬리퍼</p>
                                        <p>옷걸이</p>
                                    </div>
                                    <div class="right">
                                        <p>구두주걱</p>
                                        <p>소화기</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content_box">
                        <h4>안내사항</h4>
                        <div class="box">
                            <div class="box0">
                                <p>안내사항을 지켜주세요.</p>
                                <p>안내사항을 지켜주세요.</p>
                                <p>안내사항을 지켜주세요.</p>
                                <p>안내사항을 지켜주세요.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default RoomDetail;