import "../App.css";

function Monthly() {
  return (
    <>
      <div class="calendar">
        <div class="inner">
          <div class="calendar_title">
            <div class="cal_btn">
              <ul>
                <li class="active">
                  <a href="/booking/sub/room_calendar_monthly.html">월간</a>
                </li>
                <li>
                  <a href="/booking/sub/room_calendar_daily.html">일간</a>
                </li>
              </ul>
            </div>
            <div class="cal_txt">
              <div>
                <i class="bi bi-chevron-left"></i>
                <h4>2023. 03</h4>
                <i class="bi bi-chevron-right"></i>
              </div>
            </div>
            <p>오늘날짜 : 2023. 03. 08</p>
          </div>

          <div class="calendar_table">
            <div class="cal_ox">
              <div>
                <p class="o">예약가능</p>
                <p class="x">예약불가</p>
              </div>
            </div>

            <div class="cal_table_month">
              <table>
                <tr>
                  <th>
                    <p>
                      <span>일</span>
                    </p>
                  </th>
                  <th>
                    <p>월</p>
                  </th>
                  <th>
                    <p>화</p>
                  </th>
                  <th>
                    <p>수</p>
                  </th>
                  <th>
                    <p>목</p>
                  </th>
                  <th>
                    <p>금</p>
                  </th>
                  <th>
                    <p>토</p>
                  </th>
                </tr>
                <tr>
                  <td class="a"></td>
                  <td class="a"></td>
                  <td class="a"></td>
                  <td class="x">
                    <p>
                      <span>1</span>
                    </p>
                  </td>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span>5</span>
                    </p>
                  </td>
                  <td>
                    <p>6</p>
                  </td>
                  <td>
                    <p>7</p>
                  </td>
                  <td>
                    <p>8</p>
                  </td>
                  <td>
                    <p>9</p>
                  </td>
                  <td>
                    <p>10</p>
                  </td>
                  <td>
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span>12</span>
                    </p>
                  </td>
                  <td>
                    <p>13</p>
                  </td>
                  <td>
                    <p>14</p>
                  </td>
                  <td>
                    <p>15</p>
                  </td>
                  <td>
                    <p>16</p>
                  </td>
                  <td>
                    <p>17</p>
                  </td>
                  <td class="x">
                    <p>18</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span>19</span>
                    </p>
                  </td>
                  <td>
                    <p>20</p>
                  </td>
                  <td>
                    <p>21</p>
                  </td>
                  <td>
                    <p>22</p>
                  </td>
                  <td>
                    <p>23</p>
                  </td>
                  <td>
                    <p>24</p>
                  </td>
                  <td>
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span>26</span>
                    </p>
                  </td>
                  <td>
                    <p>27</p>
                  </td>
                  <td>
                    <p>28</p>
                  </td>
                  <td>
                    <p>29</p>
                  </td>
                  <td>
                    <p>30</p>
                  </td>
                  <td>
                    <p>31</p>
                  </td>
                  <td class="a"></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Monthly;
