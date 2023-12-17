import React from "react";

function singleAtribute({AtributeName, AtributeValue, AtributeExpertice}) {
    const modifier = Math.floor((AtributeValue-10)/2);
    
    return(
        <div>
            <h style={{margin: '10px'}}><strong>{AtributeName}</strong></h>
            <p style={{margin: '10px'}}> score: {AtributeValue}, Modifier: {modifier} </p>
            <p style={{margin: '10px'}}> expertice: {AtributeExpertice} </p>
        </div>
    )

}


export default singleAtribute;