import {useState} from 'react'
import css from  './index.scss' 

import Navigation from './layout/Navigation'


const App=()=>{
    const [name,setName]=useState('');
    function handleOnchange(e){
        setName(e.target.value);
    }
    return <div>
        <Navigation></Navigation>
        
        <label htmlFor="name">Nombre:</label>
        <label> Este es otra  prueba  <label htmlFor=""></label></label>
        <input 
            id="name" 
            type="text" 
            value={name} 
            onChange={handleOnchange}
            />

    </div>
}

export default App;