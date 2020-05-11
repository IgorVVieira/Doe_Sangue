import React from 'react';

import Header from './components/header';
import Form from './components/form';
import Main from './components/main';
import Footer from './components/footer';
import Medium from './components/medium';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Main></Main>
      <Medium></Medium>
      <Footer></Footer>
    </div>
  );
}

export default App;
