import React, { Component } from "react";


import SinglePlayerCharacter from './SingleCharacterSheet.js'
import fetchDataById from "../../BackendConaction/GetUserData.js";

class SingleCharacterSheetLoader extends Component{
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
            <SinglePlayerCharacter data={data} />
            </div>
            );
        
    }
}

export default SingleCharacterSheetLoader;