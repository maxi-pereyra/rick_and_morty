import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import { useState , useEffect } from "react";
import axios from 'axios';
import {Routes , Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/form/Form'
//import characters, { Rick } from './data.js';
//se puede traer dos cosas .el data exporta un rick y un default
//si no aclaro con un destructuring trae lo de default (cuando detructuring a una constante tiene que tener el mismo nombre )


const email = 'maxi@gmail.com'
const password = '1234asdf'

function App() {
   const location = useLocation(); //para saber donde esta posicionado el usuario
   let [characters, setCharacters] = useState([]);
   const [acces, setAcces] = useState(false);
   const navigate = useNavigate();

   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAcces(true);
         navigate('/home');
      }else {
         alert("email o password incorrexto")
      }
   }

   useEffect(() =>{
         !acces && navigate('/');
   }, [acces])
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => { //esto es una promesa
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

 /*   const onSearch = () => {
      //hacemos una copia para no perder lo que tenimos 
      setCharacters([...characters, example])
   }      */

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => 
         characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch}/>
            /* location.pathname !== '/'
            ? <Nav on-onSearch={onSearch} />
            : null */
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path="/home" 
            element={<Cards characters={characters} onClose={onClose}/>}>Home</Route>
            <Route path="/About" element={<About/>} />
            <Route path="/Detail/:id" element={<Detail/>} />
            <Route path="/Favorites" element={<Favorites/>}/>
         </Routes>
      
      
      </div>
   );
}

export default App;
