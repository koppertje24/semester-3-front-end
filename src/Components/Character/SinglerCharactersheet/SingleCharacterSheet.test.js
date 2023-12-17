const React = require('react');
const { render, screen } = require('@testing-library/react');
const { MemoryRouter, Routes, Route, useLocation  } = require('react-router-dom');
const { createMemoryHistory } = require('history');
const { SinglePlayerCharacter } = require('./SingleCharacterSheet.js');
const { CharacterSheet } = require('../../DataStruckture/CharacterSheet.js');


describe('SinglePlayerCharacter', () => {
  it('renders the character data for a valid id', () => {
    const mockData = {
      CharacterSheets: [
        new CharacterSheet({id: 1, characterName: 'Character 1', characterLevel: 1, characterName:'Wizard'}),
        new CharacterSheet({id: 2, characterName: 'Character 2', characterLevel: 2, characterName:'Wizard'}),
      ],
      PlayerName: 'Test Player',
    };

    const history = createMemoryHistory({
      initialEntries: ['/character/1'],
    });

    render(
      <MemoryRouter history={history} initialEntries={['/character/1']} >
        <Routes>
          <Route path="/character/:id">
            <Route path="/character/:id" element={<SinglePlayerCharacter data={mockData} />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Player Name: Test Player')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Character 2')).toBeInTheDocument();
  });

  it('navigates to the root route for an invalid id', () => {
    const mockData = {
      CharacterSheets: [],
      PlayerName: 'Test Player',
    };

    const history = createMemoryHistory({
      initialEntries: ['/character/1'],
    });

    render(
      <MemoryRouter history={history}>
        <Routes>
        <Route path="/">
          <Route path="/" element={<p> you should </p>} />
          <Route path="/character/:id" element={<SinglePlayerCharacter data={mockData} />} />
        </Route>
        </Routes>
      </MemoryRouter>
    );

    const location = useLocation();
    expect(location.pathname).toBe('/');
  });
});