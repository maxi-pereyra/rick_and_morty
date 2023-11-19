import axios from 'axios';
import {ADD_FAV, REMOVE_FAV, GET_CHARACTER} from './actions-types'

/* export const addFav = (character) => {
    return {type: ADD_FAV, payload: character}
};

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
} */

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) =>{
        try {
            const {data} = await axios.post(endpoint,character)      
            
            console.log("add" , data)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
            } 
            catch (error) {
                console.log(error.message);
            }
    };
};

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) =>{
        try {
            const {data} = await axios.delete(endpoint);
            
            console.log("delte" , data)

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });    
        } catch (error){
            console.log(error.message);
        }
    }
};

export const getCharacters = () => {
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`http://localhost:3001/rickandmorty`);

            //console.log("dentro get", data)
            const character = data?.results.map((ele) => ({
                id: ele.id,
                name: ele.name,
                status: ele.status,
                species: ele.species,
                gender: ele.gender,
                image: ele.image,
                origin: ele.origin
            }));
            //  console.log("character" , character)
            return dispatch({
                type: GET_CHARACTER,
                payload: character,
            })
        } catch (error) {
            console.log(error.nessage)
        }
    }
}

/* export const filterCards = (gender) => {
    return {type: FILTER , payload: gender}
}

export const orderCards =  (order) => {
    return {type: ORDER , payload: order}
} */

