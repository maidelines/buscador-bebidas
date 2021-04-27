import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriasProvider from './contentx/CategoriaContex';
import RecetasProvider from './contentx/RecetasContext';
import ModalProvider from './contentx/ModalContext';
import ListaRecetas from './components/ListaRecetas';

function App() {
  return (
    <CategoriasProvider>
     <RecetasProvider>
     <ModalProvider>    
      <Header />
      <div className ="container mt-5">
        <div className="row">
        <Formulario />
        </div>
        <ListaRecetas/>
      </div>    
    </ModalProvider>
   </RecetasProvider>
</CategoriasProvider>
    
  );
}

export default App;
