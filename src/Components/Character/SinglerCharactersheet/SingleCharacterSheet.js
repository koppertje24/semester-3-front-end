import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { CharacterClassSelect, getCharacterClassIdByName } from '../../Information/CharacterClassEnum';
import SetCharacterData from '../../BackendConaction/SetCharacterData.ts';





function SinglePlayerCharacter({ data }){
    const navigate = useNavigate();
    const { id } = useParams();
    const { CharacterSheets, PlayerName } = data;

    if (id >= 0 && id < CharacterSheets.length) {
        const specificCharacter = CharacterSheets[id];

        return (
            <div>
            <h2>Player Name: {PlayerName}</h2>
            
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
    const [character, setCharacter] = useState({...MainCharacter, CharacterClass: getCharacterClassIdByName(MainCharacter.CharacterClass)})
    const { id } = useParams();
    const [BlurCharacter, setBlurCharacter] = useState(character)


    

    const handleBlur = () => {
        console.log('Full sheet', character );
        console.log('sheet number ', id);
        setBlurCharacter(character);
        setTimeout(() => {
            SetCharacterData(null, BlurCharacter, 1, id);
        }, 1000);
      };

   
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (name === 'characterName') {
            setCharacter({ ...character, CharacterName: value });
        } else if(name === 'characterClass' )
        {
            setCharacter({ ...character, CharacterClass: value });
        }
      };

    return(
        <div>
            <h3> <input type="text" value={character.CharacterName} id="message" name="characterName" onChange={handleChange} onBlur={handleBlur} /> {BlurCharacter.CharacterName} </h3>

            <CharacterClassSelect className="characterClass" classValue={character.CharacterClass} classOnChange={handleChange}/>
            {MainCharacter.CharacterClass}
        </div>
    )
}

export default SinglePlayerCharacter;
