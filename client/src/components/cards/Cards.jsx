import Card from '../card/Card';
import Styles from "./Cards.module.css";

export default function Cards( characters ) {
   
   console.log("esto" ,characters)
   return(
       <div className={Styles.cards}>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {
               return(
                  <Card 
                  key={id} //para cuando usamos distintas platillas diferenciarlas si luego queremos modificar solo una 
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  //onClose={onClose}
                  />
               )
            })
         }
       </div>
   );
}
