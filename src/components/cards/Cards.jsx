import Card from './Card';

export default function Cards({ characters , onClose}) {
   //un foreach nno funciona porque no retorna nada 
   return(
       <div>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {
               return(
                  <Card key={id} //para cuando usamos distintas platillas diferenciarlas si luego queremos modificar solo una 
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={onClose}
                  />
               )
            })
         }
       </div>
   );
}
