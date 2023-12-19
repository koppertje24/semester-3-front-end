import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { SinglePlayerCharacter } from './SingleCharacterSheet.js';
import { CharacterSheet } from '../../DataStruckture/CharacterSheet.js';


describe('SinglePlayerCharacter', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });


  it('renders the character data for a valid id', () => {

    const history = createMemoryHistory({
      initialEntries: ['/character/1'],
    });
  
    const mockData = {
      CharacterSheets: [
        new CharacterSheet({id: 1, CharacterName: 'Character 1', characterLevel: 1, characterClass:'Wizard'}),
        new CharacterSheet({id: 2, CharacterName: 'Character 2', characterLevel: 2, characterClass:'Wizard'}),
      ],
      PlayerName: 'Test Player',
    };

    cy.mount(
      <MemoryRouter history={history} initialEntries={['/character/1']} >
        <Routes>
        <Route path="/">
          <Route path="/" element={<p> you should </p>} />
          <Route path="/character/:id" element={<SinglePlayerCharacter data={mockData} />} />
        </Route>
        </Routes>
      </MemoryRouter>
    );

    cy.contains('Player Name: Test Player').should('exist');
    cy.get('input[name="characterName"]').should('have.value', mockData.CharacterSheets[1].characterName);

  });


  it('navigates to the root route for an invalid id', () => {

    const mockData = {
      CharacterSheets: [ ],
      PlayerName: 'Test Player',
    };

    cy.mount(
      <MemoryRouter initialEntries={['/character/1']} >
        <Routes>
          <Route path="/">
            <Route path="/" element={<p> you should </p>} />
            <Route path="/character/:id" element={<SinglePlayerCharacter data={mockData} />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    
    cy.contains('Id out of range').should('exist');
  });

});