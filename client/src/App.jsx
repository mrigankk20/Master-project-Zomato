import React from 'react';
import Home from "./HOC/Home.Hoc";
import Temp from "./Components/temp";
import Master from './Components/master';

function App() {
  return (
    <>
      <Home path="/" exact component={Temp} />
      <Home path="/:type" exact component={Master} />


    </>
  );
};

export default App;
