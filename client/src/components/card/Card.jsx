   import {Link} from 'react-router-dom';
   import Styles from './Card.module.css';
   import { useState , useEffect } from 'react';
   import { useDispatch , useSelector } from 'react-redux';
   import {  addFav , removeFav } from '../../redux/actions';

   function Card({id, name, status, species, gender, origin, image , onClose}) { // en de props hacer directamente el destructuring
      
      const dispatch = useDispatch();
      const [isFav, setIsFav] = useState(false);
      const [myFavorites , setMyFavorites] = useSelector((state) => state.myFavorites);

      const handleFavorite = () => {
         if(isFav){
            setIsFav(false);
            dispatch(removeFav(id));
         }
         else{
            setIsFav(true);
            dispatch(addFav({id, name, species, gender, image, onClose}));
         }
      }

      useEffect(() => {
         
         if(myFavorites?.length !== 0 ){
            myFavorites?.forEach((fav) => {
               if (fav.id === id) {
                  setIsFav(true);
               }
            });    
         }
      }, [myFavorites , isFav ]);

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

   export default Card;