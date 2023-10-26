import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SetCharacterData from "../BackendConaction/SetCharacterData.js";

const CharacterSheetForm = () => {
    const [id] = useState(1);
    const [characterName, setCharacterName] = useState('');
    const [sheet_id, setSheetId] = useState(0);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'characterName') {
            setCharacterName(value);
        } else if (name === 'sheet_id') {
            setSheetId(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SetCharacterData(event, { id: id, characterName, sheet_id });
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
                <label htmlFor="sheet_id">player Id:</label>
                <input
                    type="number"
                    id="sheet_id"
                    name="sheet_id"
                    value={sheet_id}
                    onChange={handleInputChange}
                />
            </div>
            {/* Add more input fields for other character sheet data */}
            <button type="submit">Save</button>
        </form>
    );
}

export default CharacterSheetForm;