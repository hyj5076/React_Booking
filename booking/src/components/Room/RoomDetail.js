import '../App.css';
import './RoomDetail.css';

function RoomSpec({ spec }) {
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
}

function RoomAmenity({ amenity }) {

    const halfLength = Math.ceil(amenityItems.length / 2);
    //const itemFirstHalf = amenityItems.slice(0, halfLength);
    //const itemSecondHalf = amenityItems.slice(halfLength);

    return (
        <>
        <div className="content_box amenity">
            <h4>객실 어메니티</h4>
            <div className="box">
                {amenity.map(box => (
                <div key={divIndex} className={divIndex < halfLength ? "left" : "right"}>
                    <h3 className="title_amenity">{box.title}</h3>
                    <div className="spacebetween">
                        {box.map(div => (
                            <div>
                                {div.map(p =>(
                                    <p>{p.item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

function RoomNotice({ notice }) {
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
}

function RoomDetail() {
    
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
                        <div className="btn"><a>공유하기</a></div>
                        <div className="btn"><a>예약하기</a></div>
                    </div>

                    <RoomSpec />
                    <RoomAmenity />
                    <RoomNotice />
                </div>
            </div>
        </section>
    );
}

export default RoomDetail;