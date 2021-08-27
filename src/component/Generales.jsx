import css from './generales.scss'
import Card from './Card'

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
                    "Seleccionará el método de cronometraje que se ajuste a su competición"]

function Generales(props){

     return <div className='generales'>
                <Card conten_list={resp_asociado} action_title={"Solicitar ser asociado"}>
                    <h4>Asociado</h4>
                    
              
                </Card> 
                <Card conten_list={resp_admin} action_title={"Solicitar administrar sociedad"}>
                    <h4>Administrar una Sociedad o Club</h4>
                  
                    
                </Card> 
                <Card >
                    <h4>Como funciona</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut officia possimus debitis ea illum qui voluptate at asperiores mollitia enim nulla, optio, adipisci saepe quaerat nisi aperiam commodi quod.</p>
                </Card>                                 
             </div> 
}

export default Generales;