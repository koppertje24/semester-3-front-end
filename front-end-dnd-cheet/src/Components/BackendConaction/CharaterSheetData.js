import axios from 'axios';

async function fetchDataById(id) {
    try {
        const response = await axios.get(`http://localhost:8080/players/${id}`);  console.log(response);// Adjust the URL to your backend endpoint
        const data = response.data;
        return data;
    } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error);
        throw error; // You can re-throw the error or handle it as needed
    }
}

export default fetchDataById;
