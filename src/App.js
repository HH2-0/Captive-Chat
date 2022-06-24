import { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navs from './components/Nav/Nav'

function App() {
  return (
    <Fragment>
      <Navs></Navs>
      <Home></Home>
    </Fragment>
  );
}

export default App;
