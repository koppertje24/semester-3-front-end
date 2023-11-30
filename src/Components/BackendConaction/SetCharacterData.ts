import axios from 'axios';
import { CharacterSheet } from '../DataStruckture/CharacterSheet';

export async function SetCharacterData(event, sheet: CharacterSheet, AcountId, SheetId) {

    console.log('character sheet:', sheet);

    const apiUrl = SheetId ? `http://localhost:8080/players/put/${AcountId}/Character/${SheetId}` : `http://localhost:8080/players/post/${AcountId}/Character`;

    console.log('apiUrl:', apiUrl);

    // Determine the HTTP method (POST for create, PUT for update)
    const method = SheetId ? 'PUT' : 'POST';
    
    axios({
        method: method,
        url: apiUrl,
        data: sheet,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            console.log('Character sheet saved or updated:', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export default SetCharacterData;