import "./Reservation.css";
import "../App.css";

function Step() {
  return (
    <>
      <section id="title_3step">
        <div className="nav_reserv inner">
          <ul>
            <li className="active">
              <i className="bi bi-1-circle-fill"></i>
              <p>객실선택</p>
              <i className="bi bi-chevron-compact-right"></i>
            </li>
            <li>
              <i className="bi bi-2-circle-fill"></i>
              <p>옵션선택</p>
              <i className="bi bi-chevron-compact-right"></i>
            </li>
            <li>
              <i className="bi bi-3-circle-fill"></i>
              <p>예약·결제</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Step;
