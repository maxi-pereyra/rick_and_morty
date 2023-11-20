import React from 'react';
import SearchBar from '../searcBar/SearchBar';
import Styles from "./Nav.module.css";
import {Link} from 'react-router-dom';



const Nav = ({handlerCharacters , uniqueGender,  handlerSearch , onSearch}) => {
    return (
       <nav className={Styles.nav}>
            <button className={Styles.btn}>
               <Link to="/About">ABOUT</Link>
            </button>
            
            <button className={Styles.btn}>
               <Link to="/Home">HOME</Link>
            </button>
            
            <button className={Styles.btn}>
               <Link to="/Favorites">FAVORITOS</Link>
            </button>
            <div>
            <label >filtrar por genero </label>
            <select 
               name="gender"
               onChange={handlerCharacters} >
                  <option value="">todos</option>
                  {
                     uniqueGender?.map((gender) => (
                        <option key={gender} value={gender}>
                           {gender}
                        </option>
                     ))
                  }
               </select>

            </div>
            <SearchBar handlerSearch={handlerSearch} onSearch={onSearch} />
       </nav>
    );
 }

 
 
 export default Nav;

