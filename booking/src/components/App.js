import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./Main";
import Nav from "./common/Nav";
import RoomAll from "./Room/RoomAll";
import RoomDetail from "./Room/RoomDetail";
import AboutUs from "./Notice/AboutUs";
import Event from "./Notice/Event";
import Attraction from "./Notice/Attraction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/common/Nav" element={<Nav />} />
        <Route path="/Room/RoomAll" element={<RoomAll />} />
        <Route path="/Room/:linkPath" element={<RoomDetail />} />
        <Route path="/Notice/AboutUs" element={<AboutUs />} />
        <Route path="/Notice/Attraction" element={<Attraction />} />
        <Route path="/Notice/Event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
