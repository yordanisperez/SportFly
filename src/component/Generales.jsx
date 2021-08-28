import css from './generales.scss'
import Card from './Card'
import SeccionContext from '../store/seccion-context'
import {useContext} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const resp_asociado=["Puede o no Crear Un Club",
                    "Registrar sus palomas",
                    "Registrar sus palomas en cada competición que participara",
                    "Registrar la ubicación de su palomar utilizando el componente de mapas diseñado para tal fin",
                    "Enviar los datos de las palomas al terminar cada competición"];
const resp_admin=  ["Adicionar nuevos asociados al CLUB",
                    "Establecer el plan de competencias anual para el CLUB",
                    "Establecer cada punto de suelta de la temporada utilizando el componente de mapas diseñado para tal fin.",
                    "Certificar la ubicación del palomar de cada asociado que competirá.",
                    "Establecer la hora de suelta de cada competición",
                    "Certifica cada paloma encestada",
                    "Al final de la competencia, el administrador del club certifica",
                    "Da por terminada la competición",
                    "Seleccionará el método de cronometraje que se ajuste a su competición"];

    

function Generales(props){
    const { isAuthenticated} = useAuth0();
    const {addHint}=useContext(SeccionContext);
    function handleOnClickAsociado(){
       if (!isAuthenticated) 
            addHint("Usted debe iniciar sección para gestionar su solicitud de asociado ");
        else
            addHint("Uupsss, esta caracteristica para la solicitud de asociado aun se encuentra en Construcción")
    }

    function handleOnClickAdmin(){
        if (!isAuthenticated) 
        addHint("Usted debe iniciar sección para gestionar su solicitud de administrar un nuevo club o asociacion ");
    else
        addHint("Uupsss, esta caracteristica para la solicitud para administrar un club aun se encuentra en Construcción")

    }
   function handleOnClickFollow(){
    if (!isAuthenticated) 
        addHint("Usted debe iniciar sección para gestionar su solicitud de seguidor un miembro del club o asociacion ");
    else
        addHint("Uupsss, esta caracteristica para la solicitud de seguidor un miembro del club aun se encuentra en Construcción")      
   }

     return <div className='generales'>
                <Card conten_list={resp_asociado} action_title={"Solicitar ser asociado"} actionOnClick={handleOnClickAsociado}>
                    <h4>Asociado</h4>
                    
              
                </Card> 
                <Card conten_list={resp_admin} action_title={"Solicitar administrar sociedad"} actionOnClick={handleOnClickAdmin}>
                    <h4>Administrar una Sociedad o Club</h4>
                  
                    
                </Card> 
                <Card action_title={"Solicitar seguir a un miembro"} actionOnClick={handleOnClickFollow}>
                    <h4>Seguidor</h4>
                    <p>Es usted un seguidor de los vuelos deportivos, 
                        también tenemos un espacio para usted, 
                        podrá seguir a su competidor favorito, 
                        estará al tanto de todas sus decisiones en el momento que estas sean tomadas, 
                        y recibirá toda la información de las competencias en las que este participe.
                    </p>
                </Card>                                 
             </div> 
}

export default Generales;