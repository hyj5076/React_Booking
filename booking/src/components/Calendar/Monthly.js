import "../App.css";
import "./Calendar.css";
import Available from "./Available";
import CalendarTitle from "./Title";

function Monthly() {
  return (
    <>
      <div className="calendar">
        <div className="inner">
          <CalendarTitle />

          <div className="calendar_table">
            <Available />

            <div className="cal_table_month">
              <p>달력</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Monthly;
