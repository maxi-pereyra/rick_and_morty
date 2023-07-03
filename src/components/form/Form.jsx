import { useState } from "react";
import validation from "../Validation";

const Form = ({login}) =>{

    const [errors , setErrors] = useState({})

    const [userData, setUserData] = useState({
        email : '',
        password: ''
    });

    const handleChange = (event) =>{
        setUserData ({
            ...userData,
            [event.target.name] : event.target.value
        })

        setErrors(validation({ //la funcion va a estar retornando un obj y le voy a estar pasandoo un obj una copia del estado
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();//para que no recargue pagina
        login(userData);
    }
    return(

        <form onSubmit={handleSubmit}>
            <label htmlFor = "">Email: </label>
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{color : 'black'}}>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{color : 'black'}}>{errors.password}</p>}

            <button>Submit</button>
        </form>
    )
}

export default Form;