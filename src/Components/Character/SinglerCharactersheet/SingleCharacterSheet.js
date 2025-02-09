import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { EnumCharacterClass, getCharacterClassIdByName, CharacterClassSelect } from '../../Information/CharacterClassEnum.mjs';
import SetCharacterData from '../../BackendConaction/SetCharacterData.ts';
import DeleteCharacter from '../../BackendConaction/DeleteCharacter.js';
import ListofAtributes from './Charactercomponents/ListofAtributes.js';

export function SinglePlayerCharacter({ data }){
    const navigate = useNavigate();
    const { id } = useParams();
    const { CharacterSheets, PlayerName } = data;

    if (id >= 0 && id < CharacterSheets.length) {
        const specificCharacter = CharacterSheets[id];
        console.log('specific Character', specificCharacter);
        return (
        <div>
            <h2>Player Name: {PlayerName}</h2>
            <PlayerCharacterstructure MainCharacter={specificCharacter} UserId={data.id} />
        </div>
        );
    } else {
        navigate('/');
        return <p>Id out of range</p>;
    }
};



function PlayerCharacterstructure({MainCharacter, UserId}){
    getCharacterClassIdByName(EnumCharacterClass.Artificer);
    const [character, setCharacter] = useState({...MainCharacter, characterClass: getCharacterClassIdByName(MainCharacter.characterClass)})
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteCharacterClick = () =>
    {
        const answer = DeleteCharacter(UserId, id);
        console.log("Delete answer:", answer );
        navigate('/');
    }

    

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
            <h3> Character name: <input type="text" value={character.characterName} id="characterName" name="characterName" onChange={handleChange} onBlur={handleBlur} /></h3>
                <button onClick={deleteCharacterClick}>
                    Delete
                </button>
                <p> character class: <CharacterClassSelect className="characterClass" classValue={character.characterClass} classOnChange={handleChange} classOnBlur={handleBlur}/></p>
                <p> character Level: <input type="number" value={character.characterLevel} id="characterLevel" name="characterLevel" onChange={handleChange} onBlur={handleBlur} /></p>
                <ListofAtributes CharacterAbilityScores={character.abilityScores} />
        </div>
    )
}

export default SinglePlayerCharacter;
