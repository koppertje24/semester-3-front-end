import axios from 'axios';
import { CharacterAbilityScores }  from '../DataStruckture/CharacterAbilityScores.js'
import { CharacterSheet }  from '../DataStruckture/CharacterSheet.js'
import { DndPlayerinfo }  from '../DataStruckture/Dndplayerinfo.js'

async function fetchPlayerById(id) {
    try {
        const response = await axios.get(`http://localhost:8080/players/get/${id}`); // console.log(response); Adjust the URL to your backend endpoint
        const loseData = response.data;
        console.log('retrived loseData', loseData);
        const { playerCharacters, playerName} = loseData;

        const characterArray = [];

        playerCharacters.forEach((element, index) => {
            console.log(`Index ${index}: ${element}`);
            const { abilityScores, characterName, characterClass, skillProficiency, characterLevel, playerId } = element;
            console.log('ability scores', abilityScores);
            characterArray[index] = new CharacterSheet({
                id: element.id,
                CharacterName: characterName, 
                CharacterClass: characterClass, 
                AbilityScores: new CharacterAbilityScores({
                    strengthSaveProficiency: abilityScores.strengthSaveProficiency,
                    strength: abilityScores.strength,
                    dexteritySaveProficiency: abilityScores.dexteritySaveProficiency,
                    dexterity: abilityScores.dexterity,
                    constitutionSaveProficiency: abilityScores.constitutionSaveProficiency,
                    constitution: abilityScores.constitution,
                    intelligenceSaveProficiency: abilityScores.intelligenceSaveProficiency,
                    intelligence: abilityScores.intelligence,
                    wisdomSaveProficiency: abilityScores.wisdomSaveProficiency,
                    wisdom: abilityScores.wisdom,
                    charismaSaveProficiency: abilityScores.charismaSaveProficiency,
                    charisma: abilityScores.charisma,
                }),
                SkillProficiency: skillProficiency,
                CharacterLevel: characterLevel,
                playerId: playerId,
            });
        });
        console.log('CharacterSheets', characterArray);
        const answer = new DndPlayerinfo({ id: loseData.id, PlayerName: playerName, CharacterSheets: characterArray });
        console.log('retrieved answer', answer);
        return answer;

    } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error);   
        throw error; // You can re-throw the error or handle it as needed
    }
}

export default fetchPlayerById;
