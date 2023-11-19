import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

//conectta nuestra app con la extension redux devtools del navegador 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//para hacer peticiones a la appi/servidor 
);

export default store;

