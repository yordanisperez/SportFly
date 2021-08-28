import css from './hint.scss'
import SeccionContext from '../store/seccion-context'
import {useContext,useState} from 'react'
import Wrapper from './Wrapper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



function Hint(props){
    
    const {hint,removeHint}=useContext(SeccionContext) ;  
    function handleClosedHint(idhint){
        //Eliminamos la cadena que se visualiza del hint
       
        removeHint(idhint);
    }
    
    const items = [];

    if (hint)
         for (const [index] of hint.entries()) {
            items.push(<div className="hint" key={hint[index]._id} >{hint[index]["hint"]} 
                            <HighlightOffIcon className="hint-closed" onClick={()=>handleClosedHint(hint[index]._id)}></HighlightOffIcon>
                        </div>);
          
        }



        return <div className="conten-hint">{ hint &&  items }
                </div>
}

export default Hint;