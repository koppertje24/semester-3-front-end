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
        console.log('specific Character', specificCharacter);
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
    const [character, setCharacter] = useState({...MainCharacter, characterClass: getCharacterClassIdByName(MainCharacter.characterClass)})
    const { id } = useParams();


    

    const handleBlur = () => {
        console.log('Full sheet', character );
        console.log('sheet number ', id);

        setTimeout(() => {
            SetCharacterData(null, character, 1, id);
        }, 1500);
      };

   
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (name === 'characterName') {
            setCharacter({ ...character, characterName: value });
        } else if(name === 'characterClass' )
        {
            setCharacter({ ...character, characterClass: value });
        }
        else if(name === 'characterLevel' )
        {
            setCharacter({ ...character, characterLevel: value });
        }
      };

    return(
        <div>
            <h3> Character name: <input type="text" value={character.characterName} id="message" name="characterName" onChange={handleChange} onBlur={handleBlur} /></h3>

                <p> character class: <CharacterClassSelect className="characterClass" classValue={character.characterClass} classOnChange={handleChange} classOnBlur={handleBlur}/></p>
                <p> character Level: <input type="number" value={character.characterLevel} id="message" name="characterLevel" onChange={handleChange} onBlur={handleBlur} /></p>
        </div>
    )
}

export default SinglePlayerCharacter;
