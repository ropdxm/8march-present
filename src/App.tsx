import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Girls from './components/Girls';
import Alua from './components/girls/Alua';
import Nazmina from './components/girls/Nazmina';
import Aruzhan from './components/girls/Aruzhan';
import Home from './components/Home';
import Asylai from './components/girls/Asylai';
import Kamilla from './components/girls/Kamilla';
import Rukiya from './components/girls/Rukiya';
import Tomiris from './components/girls/Tomiris';
import Yasmin from './components/girls/Yasmin';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/nazmina" element={<Nazmina />} />
          <Route path="/alua" element={<Alua />} />
          <Route path="/aruzhan" element={<Aruzhan />} />
          <Route path="/asylai" element={<Asylai />} />
          <Route path="/kamilla" element={<Kamilla />} />
          <Route path="/rukiya" element={<Rukiya />} />
          <Route path="/tomiris" element={<Tomiris />} />
          <Route path="/yasmin" element={<Yasmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
