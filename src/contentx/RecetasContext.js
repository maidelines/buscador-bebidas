import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';

export const RecetasContext=createContext();

//Crear el Provioder donde se encuentran las funciones y el state
const RecetasProvider=(props)=>{

    //espacio useState
    const [recetas, setRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre:'',
        categorias:''
    });
    const [consultar, setConsultar] = useState(false);
    //destructuring del useState
    const {nombre,categorias}=busqueda;
    //ejecutar llamado a la api
useEffect(() => {
    if(consultar){
    const obtenerRecetas = async () =>{
        const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categorias}`;
        const recetas = await axios.get(url);
        setRecetas(recetas.data.drinks);
       //console.log(recetas);
    }
    obtenerRecetas();
}
   
  }, [busqueda]);
  
  return(
     <RecetasContext.Provider
     value={{recetas, buscarRecetas,setConsultar}}>
         {props.children}
     </RecetasContext.Provider>
  )
  }
  export default RecetasProvider;