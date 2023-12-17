import React from "react";
import SingleAtribute from "./singleAtribute.js";

function singleAtribute({CharacterAbilityScores}) {
    console.log('Single character ability Score',CharacterAbilityScores)
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <SingleAtribute  AtributeName='Strenght' AtributeValue={CharacterAbilityScores.strength} AtributeExpertice={CharacterAbilityScores.strengthSaveProficiency} />
            </div>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <SingleAtribute AtributeName='Dexterity' AtributeValue={CharacterAbilityScores.dexterity} AtributeExpertice={CharacterAbilityScores.dexteritySaveProficiency} />
            </div>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <SingleAtribute AtributeName='Constitution' AtributeValue={CharacterAbilityScores.constitution} AtributeExpertice={CharacterAbilityScores.constitutionSaveProficiency} />
            </div>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <SingleAtribute AtributeName='Inteligence' AtributeValue={CharacterAbilityScores.intelligence} AtributeExpertice={CharacterAbilityScores.intelligenceSaveProficiency} />
            </div>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <SingleAtribute AtributeName='Wisdom' AtributeValue={CharacterAbilityScores.wisdom} AtributeExpertice={CharacterAbilityScores.wisdomSaveProficiency} />
            </div>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <SingleAtribute AtributeName='Charisma' AtributeValue={CharacterAbilityScores.charisma} AtributeExpertice={CharacterAbilityScores.charismaSaveProficiency} />
            </div>
        </div>
    )
    
}

export default singleAtribute;