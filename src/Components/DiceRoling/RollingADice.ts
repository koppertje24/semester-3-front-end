export function Rolling( modifier = 0, MaxNumber = 20 )
{
    const min = 1;
    const randomNumber = Math.floor(Math.random() * ((MaxNumber*100) - min + 1)) + min;
    const Answer = ((randomNumber % MaxNumber) + 1);
    return { answer: Answer + modifier, rolled: Answer};
}

export function MultiRolling(rollAmmount = 1, modifier = 0, MaxNumber = 20 )
{
    let Answer = 0;
    let Rolls = [rollAmmount];
    for(let i = 0; i < rollAmmount; i++)
    {
        Rolls[i] = Rolling(0, MaxNumber).rolled;
        Answer += Rolls[i];
    }
    return { answer: Answer + modifier, rolled: Rolls};
}