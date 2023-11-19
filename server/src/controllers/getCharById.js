const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (id) => {

        console.log(id);

        const {data} = await axios(`${URL}/${id}`)
        
            if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id} `)
            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                status: data.status
            }
            
            return character;
            //return res.status(404).send('not found');
   
}

module.exports = { getCharById };
