import React from 'react';
import SearchBar from '../searcBar/SearchBar';
import {Link} from 'react-router-dom';



const Nav = ({onSearch}) => {
    return (
       <nav>
            <button>
               <Link to="/About">ABOUT</Link>
            </button>
            
            <button>
               <Link to="/Home">HOME</Link>
            </button>
            
            <SearchBar onSearch={onSearch}/>
       </nav>
    );
 }

 
 
 export default Nav;

 /* un componente actualizara la informacion que renderiza 
 solo cuando:
 1. se producen cambios en el estado local
 2. recibe nuevas propiedades
 setState ->  */