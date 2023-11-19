const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharacter = async () =>{
    const {data} = await axios.get(`${URL}`);
    
   
    return data;
}

module.exports = {getCharacter}