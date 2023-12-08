import "./Reservation.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomDatePicker from "./DatePicker";

function Button() {
  return (
    <>
      <div className="btn_short">
        <div className="btn0">
          <Link>예약하기</Link>
        </div>
      </div>
    </>
  );
}

function BookingBox() {
  const [adultCount, setAdultCount] = useState(2);
  const [kidCount, setKidCount] = useState(0);

  return (
    <>
      <div className="booking_box">
        <div>
          <div>
            <p>Room</p>
            <p>1</p>
          </div>
          <div>
            <p>Adult</p>
            <select
              className="light-border"
              value={adultCount}
              onChange={(e) => setAdultCount(e.target.value)}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Kid</p>
            <select
              className="light-border"
              value={kidCount}
              onChange={(e) => setKidCount(e.target.value)}
            >
              {[...Array(11).keys()].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

function DateInput({ startDate, endDate, setStartDate, setEndDate }) {
  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (new Date(newEndDate) > new Date(startDate)) {
      setEndDate(newEndDate);
    } else {
      alert("최소 숙박일수는 1일입니다.");
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setEndDate(nextDay.toISOString().split("T")[0]);
    }
  };

  return (
    <ul>
      <li>
        <CustomDatePicker
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </li>
      <li>-</li>
      <li>
        <CustomDatePicker value={endDate} onChange={handleEndDateChange} />
      </li>
    </ul>
  );
}

function Night({ nights, handleCountChange }) {
  return (
    <ul>
      <li>
        <div>
          <p>
            <input
              className="count_btn"
              type="button"
              onClick={() => handleCountChange("minus")}
              value="-"
            />
            <span>{nights}</span>박
            <input
              className="count_btn"
              type="button"
              onClick={() => handleCountChange("plus")}
              value="+"
            />
          </p>
        </div>
      </li>
    </ul>
  );
}

function Booking() {
  const [nights, setNights] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 컴포넌트 마운트 시, 오늘 날짜를 시작 날짜로 설정
  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    setStartDate(formattedToday);
  }, []);

  // 시작 날짜 또는 박 수가 변경될 때, 종료 날짜를 설정
  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + nights);
      const formattedEndDate = end.toISOString().split("T")[0];
      setEndDate(formattedEndDate);
    }
  }, [startDate, nights]);

  // 종료 날짜가 변경될 때, 박 수를 업데이트 함
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays >= 0) {
        setNights(diffDays);
      }
    }
  }, [endDate]); // 의존성 배열 의도적인 무시 : 충돌 방지

  const handleCountChange = (action) => {
    if (action === "plus") {
      setNights(nights + 1);
    } else if (action === "minus" && nights > 1) {
      setNights(nights - 1);
    }
  };

  return (
    <>
      <div className="booking_box">
        <DateInput
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <Night nights={nights} handleCountChange={handleCountChange} />
      </div>
    </>
  );
}

function Schedule() {
  return (
    <section id="content">
      <div className="content_reserv back_gray">
        <div className="booking">
          <div className="inner">
            <Booking />
            <BookingBox />
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
