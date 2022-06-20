import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderTop from './pages/HeaderTop';
import Main from './pages/Main';
import Games from './pages/Games';
// import 1234!@#$ from './pages/1234!@#$';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderTop />} >
        <Route index element={<Main />} />
        <Route path="/games" element={<Games />} />
      </Route>
    </Routes>
  );
};

export default App;