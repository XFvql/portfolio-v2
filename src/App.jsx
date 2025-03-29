import React from "react";
import Home from "./pages/Home";
import JPW from "./pages/JPW";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/service' element={ <JPW />} />
        </Routes>
      </Router>
  );
}

export default App;
