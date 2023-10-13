import React, { Component } from 'react';

import SetCharacterData from "../BackendConaction/SetCharacterData.js";

class CharacterSheetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            characterName: '',
            sheet_id: 0,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        SetCharacterData(event, this.state);
        // window.location.reload();
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