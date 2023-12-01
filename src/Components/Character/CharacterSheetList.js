import React, { Component } from "react";
import '../../App.css'; 
import { useNavigate } from 'react-router-dom';

import fetchDataById from "../BackendConaction/GetUserData.js";
import { DndPlayerinfo } from "../DataStruckture/Dndplayerinfo.js";

const PlayerCharacterTile = ({ id, character }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log(`Button clicked for character ${character.characterName} with ID ${id}`);
        navigate(`/${id}`);
    };

    return (
        <button className="character-tile" onClick={handleButtonClick}>
            Name: {character.characterName} Class: {character.characterClass}
        </button>
    );
};

const PlayerCharacterList = ({ data }) => {
    const { CharacterSheets, PlayerName} = data;
    return (
        <div>
        <h2>Player Name: {PlayerName}</h2>
        <h3>Player Characters:</h3>
            <div className="character-tile-container">
            {CharacterSheets.map((character, index) => (
                <PlayerCharacterTile key={index} id={index} character={character} />
            ))}
            </div>
        </div>
    );
};

class CharacterSheetList extends Component{
    constructor(props){
        super(props);
        this.props = props;
        
        this.state = {
            data: new DndPlayerinfo({}),
            loading: true,
            error: null,
        };
    }
    
    async componentDidMount() {
        const characterId = 1; // Replace with the actual ID when it is there

        try {
            const responseData = await fetchDataById(characterId);
            this.setState({
                data: responseData,
                loading: false,
                error: null,
            });
        } catch (error) {
            this.setState({
                data: new DndPlayerinfo({}),
                loading: false,
                error: error.message,
            });
        }
    }

    render(){
        const { data, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }

        return (
            <div>
            <h1>Player Information</h1>
            <PlayerCharacterList data={data} />
            </div>
        );
    }
}

export default CharacterSheetList;


