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
            <p>2</p>
          </div>
          <div>
            <p>Kid</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </>
  );
}

function DateInput({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  previousEndDate,
}) {
  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (new Date(newEndDate) >= new Date(startDate)) {
      setEndDate(newEndDate);
    } else {
      alert("종료 날짜는 시작 날짜 이후여야 합니다.");
      setEndDate(previousEndDate);
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
  const [previousEndDate, setPreviousEndDate] = useState("");

  useEffect(() => {
    if (endDate) {
      setPreviousEndDate(endDate);
    }
  }, [endDate]);

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    setStartDate(formattedToday);
  }, []);

  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + nights);
      const formattedEndDate = end.toISOString().split("T")[0];
      setEndDate(formattedEndDate);
    }
  }, [startDate, nights]);

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
          previousEndDate={previousEndDate}
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
