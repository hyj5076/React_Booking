import "../App.css";
import "./SelectBox.css";

function SelectBox() {
  return (
    <section id="title">
      <div class="inner">
        <h3>RoomType</h3>

        <select class="select_box">
          <option selected>전체객실타입</option>
          <option>더블룸</option>
          <option>트윈룸</option>
          <option>트리플룸</option>
          <option>패밀리룸</option>
          <option>단체룸</option>
          <option>키즈룸</option>
        </select>
      </div>
    </section>
  );
}

export default SelectBox;
