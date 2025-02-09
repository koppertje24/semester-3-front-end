import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EnumCharacterClass, getCharacterClassIdByName, CharacterClassSelect } from '../Information/CharacterClassEnum.mjs';

import { CharacterSheet } from '../DataStruckture/CharacterSheet.js';
import { SetCharacterData } from '../BackendConaction/SetCharacterData.ts';

const CharacterSheetForm = () => {
    const [characterName, setCharacterName] = useState('');
    const [userId, setUserId] = useState(0);
    const [characterClass, setcharacterClass] = useState(0);
    const navigate = useNavigate();

    getCharacterClassIdByName(EnumCharacterClass.Artificer);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'characterName') {
            setCharacterName(value);
        } else if (name === 'userId') {
            setUserId(value);
        } else if (name === 'characterClass') {
            setcharacterClass(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SetCharacterData(event, new CharacterSheet({CharacterName: characterName, playerId: userId, CharacterClass: characterClass }), 1);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="characterName">Character Name:</label>
                <input
                    type="text"
                    id="characterName"
                    name="characterName"
                    value={characterName}
                    onChange={handleInputChange}
                />
                <label htmlFor="characterClass">character Class:</label>

                <CharacterClassSelect className="characterClass" classValue={characterClass} classOnChange={handleInputChange}/>
                    
            </div>
            {/* Add more input fields for other character sheet data */}
            <button type="submit">Save</button>
        </form>
    );
}

export default CharacterSheetForm;