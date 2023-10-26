import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation.js'

import CharacterSheetList from './Components/Character/CharacterSheetList.js'
import CharacterSheet from './Components/Character/CharacterSheet.js'
import CharacterSheetForm from './Components/Character/CharacterSheetForm.js'


function App() {
  return (
      <Router >
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<CharacterSheetList />} />
          <Route path="/:id" element={<CharacterSheet />} />
          <Route path="/CreateSheet" element={<CharacterSheetForm />} />
        </Routes>
    </Router>
  );
}

export default App;
