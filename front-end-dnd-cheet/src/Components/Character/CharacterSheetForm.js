import React, { Component } from 'react';
import axios from 'axios';

class CharacterSheetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            characterName: '',
            sheet_id: 1,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { id } = this.state; // ID of the character sheet (for update)
        const { characterName } = this.state;
        const { sheet_id } = this.state;

        const characterSheetData = {
            characterName,
        };

        console.log('characterSheetData:', characterSheetData);
        console.log('sheet id:', sheet_id);
        console.log('CharacterName:', characterName);

        const apiUrl = id ? `http://localhost:8080/players/put/${id}/Character/${sheet_id}` : 'http://localhost:8080/characters/post';

        console.log('apiUrl:', apiUrl);

        // Determine the HTTP method (POST for create, PUT for update)
        const method = id ? 'PUT' : 'POST';

        axios({
            method: method,
            url: apiUrl,
            data: characterSheetData,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('Character sheet saved or updated:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="characterName">Character Name:</label>
                    <input
                        type="text"
                        id="characterName"
                        name="characterName"
                        value={this.state.characterName}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="sheet_id">player Id:</label>
                    <input
                        type="number"
                        id="sheet_id"
                        name="sheet_id"
                        value={this.state.sheet_id}
                        onChange={this.handleInputChange}
                    />
                </div>
                {/* Add more input fields for other character sheet data */}
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default CharacterSheetForm;