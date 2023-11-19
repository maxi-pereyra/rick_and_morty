import React from "react";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions";

import Cards from "../cards/Cards"

export default function Home(){

    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters)

    useEffect(()=>{
        if(!characters?.length){
            dispatch(getCharacters())
        }   
        
    },[dispatch])

    console.log("chara", )
    return (
        <div>
            <span>Home</span>
            <Cards characters={characters} />
        </div>
    )
}