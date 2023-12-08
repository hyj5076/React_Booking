import { Link } from "react-router-dom";
import "../App.css";

function CalendarTitle() {
  return (
    <>
      <div className="calendar_title">
        <div className="cal_btn">
          <ul>
            <li className="active">
              <Link>월간</Link>
            </li>
            <li>
              <Link>일간</Link>
            </li>
          </ul>
        </div>
        <div className="cal_txt">
          <div>
            <i className="bi bi-chevron-left"></i>
            <h4>2023. 03</h4>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <p>오늘날짜 : 2023. 03. 08</p>
      </div>
    </>
  );
}

export default CalendarTitle;
