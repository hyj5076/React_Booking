import { Link } from 'react-router-dom';

function ButtonLink() {
  return (
        <>
        <Link to="/Room/RoomAll">전체룸</Link>
        <Link to="/Room/RoomDetail">룸디테일</Link>
        </>
  );
}

export default ButtonLink;