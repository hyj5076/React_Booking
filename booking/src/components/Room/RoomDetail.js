import { useParams } from 'react-router-dom';
import '../App.css';
import './RoomDetail.css';
import { Link } from 'react-router-dom';
import roomsData from '../../RoomDetail.json';

/* function RoomSpec({ spec }) {
    return (
        <>
        <div className="roomspec">
            {spec.map(box => (
                <div className="box">
                    {box.map(p => (
                        <div>
                            <h3>{p.title}</h3>
                            <p>객실</p>
                        </div>
                    ))}
                </div>
            ))}             
        </div>
        </>
    )
} */

/* function RoomAmenity({ amenity }) {
    const halfLength = Math.ceil(amenity.length / 2);
    const itemFirstHalf = amenity.slice(0, halfLength);
    const itemSecondHalf = amenity.slice(halfLength);
    
    const combined = [...itemFirstHalf.map(item => ({ ...item, className: "left" })), 
                      ...itemSecondHalf.map(item => ({ ...item, className: "right" }))];

    return (
        <div className="content_box amenity">
            <h4>객실 어메니티</h4>
            <div className="box">
                {combined.map((box, index) => (
                    <div key={index} className={box.className}>
                        <h3 className="title_amenity">{box.title}</h3>
                        <div className="spacebetween">
                            {box.items.map((item, itemIndex) => (
                                <p key={itemIndex}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} */


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
    const { roomType } = useParams();
    const room = roomsData[roomType] && roomsData[roomType][0];

    // 데이터가 존재하지 않을 경우 처리
    if (!room) {
        return <div>Room not found</div>;
    }    
    
    return (
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

                    {/* <RoomSpec /> */}
                    {/* <RoomAmenity /> */}
                    {/* <RoomNotice /> */}
                </div>
            </div>
        </section>
    );
}

export default RoomDetail;