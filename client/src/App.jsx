import React from 'react';
import Home from "./HOC/Home.Hoc";
import Temp from "./Components/temp";

function App() {
  return (
    <>
      <Home path="/" exact component={Temp} />

    </>
  );
};

export default App;
