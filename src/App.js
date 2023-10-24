import React from "react";
//Componant
import Home from "./componant/Home";
import GlobalStyles from "./GlobalStyles";
//React Router
import { Route, Routes } from "react-router-dom";
import Nav from "./componant/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
