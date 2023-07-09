import {Link} from 'react-router-dom';
import Styles from './Card.module.css';
import {addFav,removeFav} from '../redux/actions';
import {connect} from 'react-redux';
import { useState , useEffect } from 'react';

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) { // en de props hacer directamente el destructuring
   
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={Styles.div}>
         
         <Link to={`/detail/${id}`}>
         <h2 className={Styles.name}>{name}</h2>
         </Link>   
         <img className={Styles.image} src={image} alt={name} /> 
         <div>
         <h2 className={Styles.info}>{species}</h2>
         <h2 className={Styles.info}>{gender}</h2>
         <h2 className={Styles.info}>{status}</h2>
         <h2 className={Styles.info}>{origin}</h2>
         </div>
         
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button className={Styles.btn} onClick={() => onClose(id)}>X</button>

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => {dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);