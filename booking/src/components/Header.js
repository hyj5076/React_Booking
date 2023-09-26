import './App.css';

function Header() {
  return (
    <div className="container">
        <div className="inner spacebetween">
            <h1><a href="#"><img src="images/logo.png" alt="로고" /></a></h1>
            <p className="modal"><a href="#"><i className="bi bi-justify"></i></a></p>
        </div>
    </div>
  );
}

export default Header;