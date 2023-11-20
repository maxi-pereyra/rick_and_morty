import React from "react";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import {getCharacters , getCharacterByName}  from "../../redux/actions";

import Nav from "../nav/Nav"
import Cards from "../cards/Cards"

function Home(){

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters)
    const [name , setName] = useState('');
    const [uniqueGender , setUiqueGender] = useState([]);
    const [filters , setFilters] = useState({
        gender: "",
    })
    useEffect(()=>{
        
        console.log("chara", characters)
        if(!characters?.length){
            console.log("entra")
            dispatch(getCharacters())
        }   
        
        const genders = Array.from(
            new Set(characters?.map((value) => value.gender))
          );
        setUiqueGender(genders);
        
    },[characters])

    const handlerSearch = (e) => {
       setName(e.target.value.toLowerCase());
    }

    const onSearch = (event) => {
        console.log("llama a busqueda")
        event.preventDefault()
        dispatch(getCharacterByName(name))
    }
    
    const handlerCharacters = (event) => {
        event.preventDefault();
        console.log(event.target)
        const {name , value} = event.target
        setFilters({...filters, [name]: value})
    }
    
    const charactersFiltered = characters.filter((value) => value.gender?.includes(filters.gender))
    
    return (
        <div>
            <Nav handlerCharacters={handlerCharacters} uniqueGender={uniqueGender} handlerSearch={handlerSearch} onSearch={onSearch}></Nav>
            <span>Home</span>
            <Cards characters={charactersFiltered} />
        </div>
    )
}

export default Home;