import "../App.css";
import Available from "./Available";
import CalendarTitle from "./Title";

function Monthly() {
  return (
    <>
      <div class="calendar">
        <div class="inner">
          <CalendarTitle />

          <div class="calendar_table">
            <Available />

            <div class="cal_table_month">
              <p>달력 끌어오기!!!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Monthly;
