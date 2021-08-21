import {useState} from 'react'
import css from  './index.scss' 
import {Route,Switch} from 'react-router-dom';
import Navigation from './layout/Navigation'
import Login from './component/Login'
import logo from './LogoPalomaOpt.svg'
import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from './component/Backdrop';


const App=()=>{
    const [name,setName]=useState('');
    const { isLoading} = useAuth0();

    function handleOnchange(e){
        setName(e.target.value);
    }
   
    if (isLoading) {
        return <div> 
                <Backdrop>

                </Backdrop>
            Loading ...</div>;
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