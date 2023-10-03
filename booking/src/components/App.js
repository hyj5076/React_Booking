import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
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
        <Route path='/Nav' element={<Nav />} />
      </Routes>
    </Router>
  );
}

export default App;
