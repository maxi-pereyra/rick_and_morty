import React from 'react';
import SearchBar from '../searcBar/SearchBar';
import Styles from "./Nav.module.css";
import {Link} from 'react-router-dom';



const Nav = ({onSearch}) => {
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
            
            <SearchBar  onSearch={onSearch}/>
       </nav>
    );
 }

 
 
 export default Nav;

