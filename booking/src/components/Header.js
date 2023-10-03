import './App.css';

function Header() {
  return (
    <div id="header">
      <div className="container">
          <div className="inner spacebetween">
              <h1><button><img src="images/logo.png" alt="로고" /></button></h1>
              <p className="modal"><a href="#"><i className="bi bi-justify"></i></a></p>
          </div>
      </div>
    </div>
  );
}

export default Header;