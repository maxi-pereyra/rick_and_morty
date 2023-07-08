import React from "react";
//import Cards from "./Cards";
import Cards from "../cards/Cards"

export default function Home(props){

    return (
        <div>
            <span>Home</span>
            <Cards characters={props.characters} onClose={props.onClose}/>
        </div>
    )
}