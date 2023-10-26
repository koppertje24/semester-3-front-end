import { useParams, useNavigate } from 'react-router-dom';
import React, { Component } from "react";

import fetchDataById from "../BackendConaction/GetUserData.js";



const PlayerCharacterMain = ({ data }) => {
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


const PlayerCharacterstructure = ({Character}) => {
    return(
        <h3>{Character.characterName} </h3>
    )
}

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

    render() {
        const { data, loading, error } = this.state;

            if (loading) {
                return <p>Loading...</p>;
            }

            if (error) {
                return <p>Error: {error}</p>;
            }
            
            return (
            <div>
            <PlayerCharacterMain data={data} />
            </div>
            );
        
    }
}

export default CharacterSheet;