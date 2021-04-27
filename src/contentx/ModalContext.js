import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
//Crear el context
export const ModalContex=createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idreceta, guardaridReceta] = useState(null);
  const [receta, guardarreceta] = useState({});

  //una vez tenemos una receta llamar a la API
  useEffect(() => {
    const obtenerReceta =  async () =>{
     if(!idreceta) return
     const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
     const resultado = await axios.get(url);
     guardarreceta(resultado.data.drinks[0]);
    }
    obtenerReceta()
  }, [idreceta])
    return ( 
        <ModalContex.Provider
    
         value={{guardaridReceta}}
         >
    {props.children}
        </ModalContex.Provider>
     );
}
 
export default ModalProvider;