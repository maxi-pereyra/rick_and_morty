import { useState } from "react";
import Styles from "./SearchBar.module.css";

export default function SearchBar({handlerSearch , onSearch}) {
 /*    const [id, setId] = useState('');

    const handleChange = (event) =>{
        setId(event.target.value)
       // event.target.value= ''
    } */

    return (
       <div>
            <nav>
                <input
                type="search"
                placeholder="buscar po nombre" 
                onChange={handlerSearch}/>
                <button onClick={onSearch}>buscar</button>
                {/* <button className={Styles.btn} onClick={ () => {onSearch(id) ; setId('')}}>Agregar</button> */}
            </nav>               
       </div>
    );
 }