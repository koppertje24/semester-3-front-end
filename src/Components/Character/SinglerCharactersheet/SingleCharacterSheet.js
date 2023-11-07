import { useParams, useNavigate } from 'react-router-dom';
import React from "react";

function SinglePlayerCharacter({ data }){
    const navigate = useNavigate();
    const { id } = useParams();
    const { playerCharacters, playerName } = data;

    if (id >= 0 && id < playerCharacters.length) {
        const specificCharacter = playerCharacters[id];

        return (
            <div>
                Character Sheet for ID: {id}
            <h2>Player Name: {playerName}</h2>
            
            <PlayerCharacterstructure Character={specificCharacter} />

            </div>
        );
    }
    else{
        navigate('/');
        return(<p>Id out of range</p>);
    }
};


function PlayerCharacterstructure({Character}){
    return(
        <div>
            <h3>{Character.characterName} </h3>

            {Character.characterClass}
        </div>
    )
}

export default SinglePlayerCharacter;
