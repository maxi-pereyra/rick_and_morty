import Card from "../card/Card";
import Styles from "./Favorites.module.css";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {

    const dispatch = useDispatch()
    const [myFavorites , setMyFavorites] = useSelector((state)=> state.myFavorites);

    console.log("Favorites", myFavorites)
    return (
       <div>

        <div className={Styles.cards}>
            {
            myFavorites?.map(fav => { //condicional chaining
                return (
                    <Card  
                     key={fav.id}
                     id={fav.id}
                     name={fav.name}
                     species={fav.species}
                     gender={fav.gender}
                     image={fav.image}
                     onClose={fav.onclose}
                     />
            )
            })
            }
         </div>
            <Link to="/">
                <button >Volver</button>
            </Link>
       </div> 
        
    )
}



export default Favorites;