import React, { Component } from "react";
import '../../App.css'; 
import { useNavigate } from 'react-router-dom';

import fetchDataById from "../BackendConaction/GetUserData.js";

const PlayerCharacterTile = ({ id, character }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log(`Button clicked for character ${character.characterName} with ID ${id}`);
        navigate(`/${id}`);
    };

    return (
        <button className="character-tile" onClick={handleButtonClick}>
            Name: {character.characterName}
        </button>
    );
};

const PlayerCharacterList = ({ data }) => {
    const { playerCharacters, playerName } = data;
    return (
        <div>
        <h2>Player Name: {playerName}</h2>
        <h3>Player Characters:</h3>
            <div className="character-tile-container">
            {playerCharacters.map((character, index) => (
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
            data: null,
            loading: true,
            error: null,
        };
    }
    
    async componentDidMount() {
        const characterId = 1; // Replace with the actual ID you want to fetch

        try {
            const responseData = await fetchDataById(characterId);
            this.setState({
                data: responseData,
                loading: false,
                error: null,
            });
        } catch (error) {
            this.setState({
                data: null,
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


