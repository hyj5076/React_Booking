import "../App.css";
import "./FacilityAll.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SelectBox from "../common/SelectBox";
import roomTypeData from "../data/RoomTypeList.json";

function FacilityList({ rooms }) {
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

function FacilityAll() {
  return (
    <>
      <Header />
      <SelectBox />
      <section id="content">
        <div id="roomList" class="inner">
          <FacilityList rooms={roomTypeData.RoomTypeData} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FacilityAll;
