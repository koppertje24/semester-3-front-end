import { Component } from "react";
import { render } from 'react-dom';

import CharacterSheetData from '../BackendConaction/CharaterSheetData.js';
import fetchDataById from "../BackendConaction/CharaterSheetData.js";


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
                {/* Use the 'data' state in your component */}
                {data && (
                    <div>
                        <h2>Data</h2>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </div>
        );
    }
}

export default CharacterSheet;