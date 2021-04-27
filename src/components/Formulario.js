import React, {useContext, useState}from "react";
import {CategoriaContex} from '../contentx/CategoriaContex';
import {RecetasContext} from '../contentx/RecetasContext';

const Formulario = () => {
    //State del Formulario para a búsqueda
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categorias:''
    
    });

    //Funcion para leer los contenidos
const obtenerDatosBusqueda= e =>{
    setBusqueda({
        ...busqueda,
        [e.target.name]:e.target.value
    })
}

    const {categorias} = useContext(CategoriaContex);
    const{buscarRecetas,setConsultar}=useContext(RecetasContext);
 
  return (
    <form className="col-12"
    onSubmit={e=>{
        e.preventDefault();
        buscarRecetas(busqueda)
        setConsultar(true)}}>
      <fieldset className="text-center">
        <legend>Busca bebidas por categorias o Ingredientes</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingredientes"
            onChange={obtenerDatosBusqueda}
          />
        </div>
        <div className = "col-md-4">
            <select 
            className ="form-control"
            name="categorias"
            onChange={obtenerDatosBusqueda}>
                <option value = "">Selecciona Categoria</option>
                {categorias.map(categorias=>(
                    <option 
                    key = {categorias.strCategory}
                    value ={categorias.strCategory}
                    >{categorias.strCategory}</option>
                ))}
            </select>
        </div>
        <div className="col-md-4">
            <input
             type = "submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"/>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
