import Card from "../card/Card";
import Styles from "./Favorites.module.css";
import { connect } from "react-redux";

const Favorites = ({ myFavorites}) => {
    return (
        
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
        
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (
    mapStateToProps,
    null
)(Favorites);