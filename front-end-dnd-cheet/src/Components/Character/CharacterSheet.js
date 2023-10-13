import React, { Component } from "react";
import '../../App.css'; 

import fetchDataById from "../BackendConaction/GetUserData.js";

const PlayerCharacterTile = ({ character }) => (
    <button className="character-tile">
      Name: {character.characterName}
    </button>
  );

  const PlayerCharacterList = ({ data }) => {
    const { playerCharacters, playerName } = data;
    return (
      <div>
        <h2>Player Name: {playerName}</h2>
        <h3>Player Characters:</h3>
            <div className="character-tile-container">
            {playerCharacters.map((character, index) => (
                <PlayerCharacterTile key={index} character={character} />
            ))}
            </div>
      </div>
    );
  };

class CharacterSheet extends Component{
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

export default CharacterSheet;


