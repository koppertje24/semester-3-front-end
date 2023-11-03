import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SinglePlayerCharacter from './SingleCharacterSheet';

describe('SinglePlayerCharacter Component', () => {
  it('renders character details when ID is in range', () => {
    const data = {
      playerCharacters: [
        { characterName: 'Character 1', characterClass: 'Class 1' },
        { characterName: 'Character 2', characterClass: 'Class 2' },
      ],
      playerName: 'John Doe',
    };

    render(
      <MemoryRouter initialEntries={['/characters/0']}>
        <Routes>
        <Route path="/characters/:id" element={<SinglePlayerCharacter data={data} />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the character details are displayed when ID is in range
    expect(screen.getByText('Character Sheet for ID: 0')).toBeInTheDocument();
    expect(screen.getByText('Player Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Character 1')).toBeInTheDocument();
    expect(screen.getByText('Class 1')).toBeInTheDocument();
  });

  it('renders "Id out of range" when ID is out of range', () => {
    const data = {
      playerCharacters: [
        { characterName: 'Character 1', characterClass: 'Class 1' },
        { characterName: 'Character 2', characterClass: 'Class 2' },
      ],
      playerName: 'John Doe',
    };

    render(
      <MemoryRouter initialEntries={['/characters/3']}>
        <Routes>
        <Route path="/characters/:id" element={<SinglePlayerCharacter data={data} />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if "Id out of range" message is displayed
    expect(screen.getByText('Id out of range')).toBeInTheDocument();
  });
});
