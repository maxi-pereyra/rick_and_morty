const axios = require('axios');


const URL = 'https://rickandmortyapi.com/api/character';

const getCharacterByName = async (name) => {

    const {data} = await axios.get(`${URL}/?name=${name}`);
    
    const characters = data.results.map(ele => {
        return{
            id: ele.id,
            name: ele.name,
            status: ele.status,
            species: ele.species,
            gender: ele.gender,
            image: ele.image,
            origin: ele.origin.name
        }
    })
    
    return characters;
    
}

module.exports = {getCharacterByName}
