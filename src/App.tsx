import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './styles/app.css';         //created sass sile for styling purposes

function App() {
  return (
    <div className="App">
      <Header></Header>   //Header component
      <Main></Main>       //Main component
    </div>
  );
}

export default App;
