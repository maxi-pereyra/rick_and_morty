import React from "react";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import {getCharacters}  from "../../redux/actions";

import Nav from "../nav/Nav"
import Cards from "../cards/Cards"

function Home(){

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters)

    useEffect(()=>{
        
        console.log("chara", characters)
        if(!characters?.length){
            console.log("entra")
            dispatch(getCharacters())
        }   
        
    },[])

    console.log("chara", characters)
    

    return (
        <div>
            <Nav></Nav>
            <span>Home</span>
            <Cards characters={characters} />
        </div>
    )
}

export default Home;