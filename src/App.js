import { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';

//App
import HomePage2 from './components/stuff/stuff'
import Navbar from './common/Nav/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/homePage2' exact element={<HomePage2></HomePage2>} />
        </Routes>
      </Router>
    </>
  );
}


//firebase authetication


export default App;
