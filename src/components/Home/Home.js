import React from 'react';
import Header from './Header/Header';
import Contacts from './Contact-Us/Contact';
import './Home.css'
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <Header></Header>
      <Contacts></Contacts>
    </Fragment>
  );
}

export default Home;