import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Aboutpage from "./Components/Aboutpage.jsx";
import Work from "./Components/Work.jsx";
import Home from "./Components/Home.jsx"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<Aboutpage />} />
        <Route path="/work" exact element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;