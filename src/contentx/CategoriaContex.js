import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
//Crear Context
export const CategoriaContex=createContext();

//Crear el Provioder donde se encuentran las funciones y el state
const CategoriasProvider=(props)=>{

//espacio useState
const [categorias, setCategorias] = useState([]);

//ejecutar llamado a la api
useEffect(() => {
  const obtenerCategoria = async () =>{
      const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categorias = await axios.get(url);
      setCategorias(categorias.data.drinks);
  }
  obtenerCategoria();
}, []);

return(
   <CategoriaContex.Provider
   value={{categorias}}>
       {props.children}
   </CategoriaContex.Provider>
)
}

export default CategoriasProvider;