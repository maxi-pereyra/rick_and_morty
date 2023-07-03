import axios from 'axios';
import { useParams } from "react-router-dom"; //nos permite acceder a la variable de la url
import {useState , useEffect} from 'react';

export default function Detail(){
    //inicia como un objeto vacio
    const [character, setCharacter] = useState({});
    //const obj = useParams();
    //console.log(obj);
    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});    
     }, [id]);

    return (
        <div>
            {
                /* character && <div>//coersion de datos 
                    <h2>{character.name}</h2>
                </div> */
                //character ? <h2>{character.name}</h2> : null 
            }      
            <h2>{character?.name}</h2>
            <h2>{character?.atatus}</h2>    
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    );
}