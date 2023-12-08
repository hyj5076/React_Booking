import "./Reservation.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Button() {
  return (
    <>
      <div class="btn_short">
        <div class="btn0">
          <Link>예약하기</Link>
        </div>
      </div>
    </>
  );
}

function BookingBox() {
  return (
    <>
      <div class="booking_box">
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

function DateInput({ startDate, endDate, setStartDate, setEndDate }) {
  return (
    <ul>
      <li>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </li>
      <li>-</li>
      <li>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
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
              class="count_btn"
              type="button"
              onClick={() => handleCountChange("minus")}
              value="-"
            />
            <span>{nights}</span>박
            <input
              class="count_btn"
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
      <div class="booking_box">
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
      <div class="content_reserv back_gray">
        <div class="booking">
          <div class="inner">
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
