import React,{useContext, useState}from 'react';
import {ModalContex} from '../contentx/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
const Receta = ({receta}) => {

    //Configuracion del modal de materia-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setopen] = useState(false);
    const classes = useStyles();
    const handleOpen =()=>
    {
        setopen(true);
    }
    const handleClose=()=>{
        setopen(false);
    }
//extraer los valores del context
const {guardaridReceta} =useContext(ModalContex);
    return (  
   <div className ="col-md-4 mb-3"> 
   <div className = "card">
       <h2 className ="card-header">{receta.strDrink}</h2>
       <img className= "card-img-top" src ={receta.strDrinkThumb} alt ={`Imagen de ${receta.strDrink}`}/>
       <div className="card-body">
           <button type="button" className="btn btn-block btn-primary"
            onClick={()=>{
                guardaridReceta(receta.idDrink)
                handleOpen()
           }}>Ver Receta</button>
           <Modal open ={opem}>
               <div styled = {modalStyle} className={classes.paper}></div>
           </Modal>
       </div>
   </div>
    </div>
    );
}
 
export default Receta;