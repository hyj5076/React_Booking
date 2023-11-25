import "../App.css";
import "./RoomAll.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import roomTypeData from "../data/RoomTypeList.json";
import SelectBox from "../common/SelectBox";

function RoomTypeList({ rooms }) {
  return (
    <>
      {rooms.map((room) => (
        <div className="content_list">
          <h3 className={room.alignment}>{room.title}</h3>
          <div className="content_list_txt">
            <p className={room.alignment}>{room.description}</p>
            <div className="content_img">
              <img src={room.image} alt={room.title} />
            </div>
          </div>
          <div className={room.alignment === "left" ? "go" : "go_left"}>
            <a href={room.link}>
              <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

function RoomAll() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div id="roomList" class="inner">
          <RoomTypeList rooms={roomTypeData.RoomTypeData} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default RoomAll;
