import "./Reservation.css";
import "../App.css";

function Step() {
  return (
    <section id="title_3step">
      <div class="nav_reserv inner">
        <ul>
          <li class="active">
            <i class="bi bi-1-circle-fill"></i>
            <p>객실선택</p>
            <i class="bi bi-chevron-compact-right"></i>
          </li>
          <li>
            <i class="bi bi-2-circle-fill"></i>
            <p>옵션선택</p>
            <i class="bi bi-chevron-compact-right"></i>
          </li>
          <li>
            <i class="bi bi-3-circle-fill"></i>
            <p>예약·결제</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Step;
