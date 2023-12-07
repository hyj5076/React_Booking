import { Link } from "react-router-dom";
import "./Reservation.css";
import "../App.css";

function Select() {
  return (
    <section id="title_reserv">
      <div class="nav_reserv inner">
        <ul>
          <li>
            <Link>Gramping</Link>
          </li>
          <li class="active">
            <Link>Room</Link>
          </li>
          <li>
            <Link>Others</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Select;
