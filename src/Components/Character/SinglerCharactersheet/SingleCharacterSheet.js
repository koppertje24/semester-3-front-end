import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import SetCharacterData from '../../BackendConaction/SetCharacterData';
import { getCharacterClassByName } from '../../Information/CharacterClassEnum';





function SinglePlayerCharacter({ data }){
    const navigate = useNavigate();
    const { id } = useParams();
    const { playerCharacters, playerName } = data;

    if (id >= 0 && id < playerCharacters.length) {
        const specificCharacter = playerCharacters[id];

        return (
            <div>
            <h2>Player Name: {playerName}</h2>
            
            <PlayerCharacterstructure MainCharacter={specificCharacter} />

            </div>
        );
    }
    else{
        navigate('/');
        return(<p>Id out of range</p>);
    }
};



function PlayerCharacterstructure({MainCharacter}){
    const [character, setCharacter] = useState(MainCharacter)
    const { id } = useParams();
    const [BlurCharacter, setBlurCharacter] = useState(MainCharacter)

    const handleBlur = () => {
        console.log('Full sheet', BlurCharacter );
        const classNumber = getCharacterClassByName(character.characterClass);
        console.log('Class number ', classNumber);
        console.log('sheet number ', id);
        setBlurCharacter({...character, characterClass: classNumber});
        setTimeout(() => {
            SetCharacterData(null, character, 1, id);
        }, 1000);
      };

   
    const handleChange = (event) => {
        setCharacter({ ...character, characterName: event.target.value });
      };

    return(
        <div>
            <h3> <input type="text" value={character.characterName} id="message" name="message" onChange={handleChange} onBlur={handleBlur} /> {BlurCharacter.characterName} </h3>

            {MainCharacter.characterClass}
        </div>
    )
}

export default SinglePlayerCharacter;
