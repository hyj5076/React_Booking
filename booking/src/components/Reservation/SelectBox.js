import "../App.css";

function SelectBox() {
  return (
    <>
      <section id="title">
        <div class="inner">
          <h3>Reservation</h3>

          <select class="select_box">
            <option>예약현황</option>
            <option>예약하기</option>
            <option>예약확인</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default SelectBox;
