import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation.js'

import CharacterSheetList from './Components/Character/CharacterSheetList.js'
import SingleCharacterSheetLoader from './Components/Character/SinglerCharactersheet/SingleCharacterSheetLoader.js'
import CharacterSheetForm from './Components/Character/CharacterSheetForm.js'
import BasicDice from './Components/DiceRoling/BasicDice.js';


function App() {
  return (
      <Router >
        <Navigation />
        <Routes>
          <Route path="/" exact element={<CharacterSheetList />} />
          <Route path="/:id" element={<SingleCharacterSheetLoader />} />
          <Route path="/CreateSheet" element={<CharacterSheetForm />} />
        </Routes>
        <BasicDice />
    </Router>
  );
}

export default App;
