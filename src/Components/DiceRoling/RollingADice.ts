export function Rolling( modifier = 0, MaxNumber = 20 )
{
    const min = 1;
    const randomNumber = Math.floor(Math.random() * (10000 - min + 1)) + min;
    const Answer = ((randomNumber % MaxNumber) + 1);
    return { answer: Answer + modifier, rolled: Answer};
}