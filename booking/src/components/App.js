import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import Main from './Main';
import Nav from './common/Nav';
import RoomAll from './Room/RoomAll';
import RoomDetail from './Room/RoomDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/common/Nav' element={<Nav />} />
        <Route path='/Room/RoomAll' element={<RoomAll />} />
        <Route 
          path='/Room/:roomType' 
          element={<RoomDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
