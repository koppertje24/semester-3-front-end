import axios from 'axios';

async function SetCharacterData(event, state) {

    const { id } = state; // ID of the character sheet (for update)
    const { characterName } = state;
    const { sheet_id: userId } = state;

    const characterSheetData = {
        characterName,
        userId,
    };

    console.log('player id:', id);
    console.log('sheet id:', userId);
    console.log('CharacterName:', characterName);

    const apiUrl = userId ? `http://localhost:8080/players/put/${id}/Character/${userId}` : `http://localhost:8080/players/post/${id}/Character`;

    console.log('apiUrl:', apiUrl);

    // Determine the HTTP method (POST for create, PUT for update)
    const method = userId ? 'PUT' : 'POST';

    characterSheetData.userId = id

    console.log('character:', characterSheetData);

    axios({
        method: method,
        url: apiUrl,
        data: characterSheetData,
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