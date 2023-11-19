import {ADD_FAV, REMOVE_FAV ,GET_CHARACTER} from './actions-types'

const initialState = {
    characters: [],
    myFavorites: []
};

const reducer = (state = initialState, {type,payload}) => {
     switch(type){
        case ADD_FAV:{
            return {
                ...state,
                myFavorites: [...state.myFavorites , payload] 
            }}
        case REMOVE_FAV:
           { return{
                ...state,
                myFavorites: payload
            }}
        case GET_CHARACTER:{
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