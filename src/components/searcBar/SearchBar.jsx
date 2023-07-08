import { useState } from "react";
import Styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
    const [id, setId] = useState('');

    const handleChange = (event) =>{
        setId(event.target.value)
       // event.target.value= ''
    }

    return (
       <div>
            <nav>
                <input type='search' onChange={handleChange} value={id}/>
                <button className={Styles.btn} onClick={ () => {onSearch(id) ; setId('')}}>Agregar</button>
            </nav>                {/* si solo hagoo onnSearch(id) se ejecuta de inmediato sin esperar el click */} 
       </div>
    );
 }