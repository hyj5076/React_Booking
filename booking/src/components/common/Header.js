import '../App.css';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
      <div className="container">
          <div className="inner spacebetween">
              <h1><Link to="/"><img src="/images/logo.png" alt="로고" /></Link></h1>
              <p className="modal"><Link to="/common/Nav"><i className="bi bi-justify"></i></Link></p>
          </div>
      </div>
    </div>
  );
}

export default Header;