import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import Main from './Main';
import Nav from './common/Nav';
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
      </Routes>
    </Router>
  );
}

export default App;
