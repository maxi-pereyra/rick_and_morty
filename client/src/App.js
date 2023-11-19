import './App.css';
import { useState , useEffect } from "react";
import {Routes , Route} from 'react-router-dom';
import axios from 'axios';

import Home from './components/home/Home'
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form'

function App() {
   let [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
  
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login';
         const {data}= await axios(URL + `?email=${email}&password=${password}`) 
         const { access } = data;
         
         setAccess(access);   
          
      } catch (error) {
         console.log(error.message);
         //console.log(access)
      }
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => 
         characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App img'>
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path="/home" element={<Home/>}>Home</Route>
            <Route path="/About" element={<About/>} />
            <Route path="/Detail/:id" element={<Detail/>} />
            <Route path="/Favorites" element={<Favorites/>}/>
         </Routes>
      
      
      </div>
   );
}

export default App;
