import "../App.css";

function Step() {
  return (
    <section id="content">
      <div class="content_reserv back_gray">
        <div class="booking">
          <div class="inner">
            <div class="booking_box">
              <ul>
                <li>
                  <input type="date" />
                </li>
                <li>-</li>
                <li>
                  <input type="date" />
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <p>
                      <input
                        class="count_btn"
                        type="button"
                        onclick="count('minus')"
                        value="-"
                      />
                      <span>1</span>박
                      <input
                        class="count_btn"
                        type="button"
                        onclick="count('plus')"
                        value="+"
                      />
                    </p>
                  </div>
                </li>
              </ul>
            </div>

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

            <div class="btn_short">
              <div class="btn0">
                <a href="/booking/sub/room_1reserv_2.2.html">예약하기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step;
