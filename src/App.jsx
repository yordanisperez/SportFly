import {useState} from 'react'
import css from  './index.scss' 
import {Route,Switch} from 'react-router-dom';
import Navigation from './layout/Navigation'
import Login from './component/Login'
import logo from './LogoPalomaOpt.svg'

const App=()=>{
    const [name,setName]=useState('');
    function handleOnchange(e){
        setName(e.target.value);
    }
    return <div>
        <Navigation></Navigation>
        <Switch>
            <Route path='/' exact>
                    <label htmlFor="name">Nombre:</label>
                <label> Este es otra  prueba  <label htmlFor=""></label></label>
                <input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={handleOnchange}
                    />              
            </Route>  
            <Route path='/login' >
                <Login title= {'Su formulario de autentificarse personalizado'} logo={logo}></Login>
            </Route>             
        </Switch>


    </div>
}

export default App;