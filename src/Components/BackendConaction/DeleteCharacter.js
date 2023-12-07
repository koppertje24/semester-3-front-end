import axios from 'axios';

async function DeleteCharacter(userId, characterIndexId)
{
    const response = await axios.delete(`http://localhost:8080/characters/delete/${userId}/${characterIndexId}`);
    return response;
}


export default DeleteCharacter;