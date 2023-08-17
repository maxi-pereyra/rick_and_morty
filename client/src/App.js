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


/* const email = 'maxi@gmail.com'
const password = '1234asdf'
 */
function App() {
   const location = useLocation(); //para saber donde esta posicionado el usuario
   let [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

/*    const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }else {
         alert("email o password incorrexto")
      }
   } */
   
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login';
         const {data}= await axios(URL + `?email=${email}&password=${password}`) 
         const { access } = data;
         
         setAccess(access);   
         access && navigate('/home'); 
         
      } catch (error) {
         console.log(error.message);
         //console.log(access)
      }
   }

   useEffect(() =>{
         !access && navigate('/');
   }, [access])

   const onSearch = async (id) => {
    try {
       const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch (error) {
         alert('¡No hay personajes con este ID!');
         } 
   }


   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => 
         characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App img'>
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
