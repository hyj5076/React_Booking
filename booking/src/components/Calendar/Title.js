import { Link } from "react-router-dom";
import "../App.css";
import "./Calendar.css";
import React, { useState, useEffect } from "react";

function CalendarTitle() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentYearMonth, setCurrentYearMonth] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${String(
      today.getMonth() + 1
    ).padStart(2, "0")}. ${String(today.getDate()).padStart(2, "0")}`;
    const formattedYearMonth = `${today.getFullYear()}. ${String(
      today.getMonth() + 1
    ).padStart(2, "0")}`;

    setCurrentDate(formattedDate);
    setCurrentYearMonth(formattedYearMonth);
  }, []);

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
            <h4>{currentYearMonth}</h4>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <p>오늘날짜 : {currentDate}</p>
      </div>
    </>
  );
}

export default CalendarTitle;
