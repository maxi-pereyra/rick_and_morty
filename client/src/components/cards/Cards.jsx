import Card from '../card/Card';
import Styles from "./Cards.module.css";

export default function Cards( {characters} ) {
   
   return(
       <div className={Styles.cards}>
         {
            characters?.map((personaje) => {
               return(
                  <Card 
                  key={personaje.id} //para cuando usamos distintas platillas diferenciarlas si luego queremos modificar solo una 
                  id={personaje.id}
                  name={personaje.name}
                  status={personaje.status}
                  species={personaje.species}
                  gender={personaje.gender}
                  image={personaje.image}
                  origin={personaje.origin.name}
                  //onClose={onClose}
                  />
               )
            })
         }
       </div>
   );
}
