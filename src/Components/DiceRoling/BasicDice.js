import React, { useState } from 'react';
import { Rolling } from './RollingADice.ts';


function BasicDice() {
    const [roll, setRoll] = useState({answer:0, rolled: 0, sides:0, modifier:0});
    const [showModal, setShowModal] = useState(false);


    const buttons = [
        {name: '1D4', onClick: () => rollDice(0, 4) },
        {name: '1D6', onClick: () => rollDice(0, 6)}, 
        {name: '1D8', onClick: () => rollDice(0, 8)}, 
        {name: '1D10', onClick: () => rollDice(0, 10)}, 
        {name: '1D12', onClick: () => rollDice(0, 12)}, 
        {name: '1D20', onClick: () => rollDice(0, 20)}, 
        {name: '1D100', onClick: () => rollDice(0, 100)}
    ];
    

    const rollDice = (modifier, dice) => {
        const newRoll = Rolling(modifier, dice);
        console.log('1 dice rolled',newRoll);
        setRoll(prevState => ({
            ...prevState,
            answer: newRoll.answer,
            rolled: newRoll.rolled,
            sides: dice,
            modifier: modifier,
        }));
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {buttons.map((button, index) => (
                    <button key={index} style={{margin: '10px'}} onClick={button.onClick}>
                        {button.name}
                    </button>
                ))}
            </div>
            {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={closeModal}>&times;</span>
                            <h style={{display: 'flex', justifyContent: 'center'}}><strong>you rolled a {roll.answer}.</strong></h>
                            <p style={{display: 'flex', justifyContent: 'center'}}> you rolled on a {roll.sides} sided dice a {roll.rolled}.</p>
                            <p style={{display: 'flex', justifyContent: 'center'}}> your modifier on the dice was a {roll.modifier}.</p>
                        </div>
                    </div>
                )}
        </div>
        
        
    );
  }
  
  export default BasicDice;