import axios from 'axios';

async function SetCharacterData(event, state, AcountId, SheetId) {

    const { id } = state; // ID for update
    const { characterName } = state;
    const { characterClass } = state;
    const { playerId: userId } = state;

    const abilityScores  = [12, 15, 14, 17, 8, 20];
    const skillProficiency = [true, true, false];
    const characterLevel = 1;

    const characterSheetData = {
        characterName,
        characterClass,
        abilityScores,
        skillProficiency,
        characterLevel,
        userId,
    };

    console.log('playerId:', userId);
    console.log('SheetId:', SheetId);
    console.log('id:', id);
    console.log('CharacterName:', characterName);
    console.log('CharacterClass:', characterClass);

    console.log('AbilityScores:', abilityScores);
    console.log('SkillProficiency:', skillProficiency);
    console.log('CharacterLevel:', characterLevel);

    const apiUrl = SheetId ? `http://localhost:8080/players/put/${AcountId}/Character/${SheetId}` : `http://localhost:8080/players/post/${AcountId}/Character`;

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