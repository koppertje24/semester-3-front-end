import { Component } from "react";
import { render } from 'react-dom';

class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div className="CharacterSheet">
                Hello world!
            </div>
        )
    }
}

export default CharacterSheet;