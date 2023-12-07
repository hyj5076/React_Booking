import "../App.css";

function CalendarTitle() {
  return (
    <>
      <div class="calendar_title">
        <div class="cal_btn">
          <ul>
            <li class="active">
              <a href="/booking/sub/room_calendar_monthly.html">월간</a>
            </li>
            <li>
              <a href="/booking/sub/room_calendar_daily.html">일간</a>
            </li>
          </ul>
        </div>
        <div class="cal_txt">
          <div>
            <i class="bi bi-chevron-left"></i>
            <h4>2023. 03</h4>
            <i class="bi bi-chevron-right"></i>
          </div>
        </div>
        <p>오늘날짜 : 2023. 03. 08</p>
      </div>
    </>
  );
}

export default CalendarTitle;
