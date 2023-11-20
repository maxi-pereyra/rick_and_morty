import {ADD_FAV, REMOVE_FAV ,GET_CHARACTER , GET_BY_NAME} from './actions-types'

const initialState = {
    characters: [],
    myFavorites: [],
    charactersCopy: [],
};

const reducer = (state = initialState, {type,payload}) => {
     switch(type){
        case ADD_FAV:{
           
            return {
                ...state,
                myFavorites: [payload] 
            }}
        case REMOVE_FAV:
           { return{
                ...state,
                myFavorites: [payload]
            }}
        case GET_CHARACTER:{
            return{
                ...state,
                characters: payload
            }
        }
        case GET_BY_NAME:{
            return{
                ...state,
                characters: payload
            }
        }
        default:
            return {...state}
     }
}

export default reducer; 