import { useParams } from 'react-router-dom';
import '../App.css';
import './RoomDetail.css';
import { Link } from 'react-router-dom';
import roomsData from '../../RoomDetail.json';
import Header from '../common/Header';
import SelectBox from '../common/SelectBox';

function RoomSpec({ spec = [] }) {
    return (
        <>
        <div className="roomspec">
            {spec.map(item => (
                <div className="box">
                    {item.map(p => (
                        <div>
                            <h3>{p.title}</h3>
                            <p>{p.spec}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    )
}


function RoomAmenity({ amenity = [] }) {
    return (
        <div className="content_box amenity">
            <h4>객실 어메니티</h4>
            <div className="box">
                {amenity.map((box, index) => {
                    const allIndex = Math.ceil(box.amenity.length / 2);
                    const leftItems = box.amenity.slice(0, allIndex);
                    const rightItems = box.amenity.slice(allIndex);

                    return (
                        <div key={index}>
                            <h3 className="title_amenity">{box.title}</h3>
                            <div className="spacebetween">
                                <div className="left">
                                    {leftItems.map((item, itemIndex) => (
                                        <p key={itemIndex}>{item.item}</p>
                                    ))}
                                </div>
                                <div className="right">
                                    {rightItems.map((item, itemIndex) => (
                                        <p key={itemIndex}>{item.item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

/* function RoomNotice({ notice }) {
    return (
    <div className="content_box">
        <h4>안내사항</h4>
        <div className="box">
            <div className="box0">
                {notice.map(p => (
                    <p>{p.content}</p>
                ))}
            </div>
        </div>
    </div>
    )
} */

function RoomDetail() {
    const { linkPath } = useParams();
    const room = roomsData[linkPath] && roomsData[linkPath][0];
    //[Q] && 왼쪽값이 truthy하면 오른쪽 값이 반환됨

    // 데이터가 존재하지 않을 경우 처리
    if (!room) {
        return <div>Room not found</div>;
    }    
    
    return (
        <>
        <Header />
        <SelectBox />
        <section id="content">
            <div className="inner">
                <div className="content_main">
                    <div className="content_title center">
                        <h3>{room.title}</h3>
                        <p>{room.description}</p>
                    </div>

                    <div className="content_img">
                        <img src={room.image} alt={room.type} />
                    </div>
                    
                    <div className="content_btn">
                        <div className="btn"><Link>공유하기</Link></div>
                        <div className="btn"><Link>예약하기</Link></div>
                    </div>

                    <RoomSpec spec={room.spec} />
                    <RoomAmenity amenity={room.amenity} />
                    {/* <RoomNotice /> */}
                </div>
            </div>
        </section>
        </>
    );
}

export default RoomDetail;