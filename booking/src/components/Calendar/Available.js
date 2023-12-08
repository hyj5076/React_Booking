import "../App.css";
import "./Calendar.css";

function Available() {
  return (
    <>
      <div className="cal_ox">
        <div>
          <p className="o">예약가능</p>
          <p className="x">예약불가</p>
        </div>
      </div>
    </>
  );
}

export default Available;
