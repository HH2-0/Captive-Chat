import { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navs from './components/Nav/Nav'

//App
function App() {
  return (
    <Fragment>
      <Navs></Navs>
      <Home></Home>
    </Fragment>
  );
}


//firebase authetication


export default App;
