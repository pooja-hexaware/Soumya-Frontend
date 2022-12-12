import logo from './logo.svg';
import './App.css';

import StoreCard from './components/Storecard';
import Menucard from './components/Menucard';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Container from './components/Container';
import AddtoCart from './components/AddtoCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' exact element={<Container><StoreCard/></Container>} />
            <Route path='/menucard' element={<Menucard/>} />
            <Route path='/AddtoCart' element={<Container><AddtoCart/></Container>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;