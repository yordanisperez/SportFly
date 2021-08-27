import css from './login.scss'
import Backdrop from './Backdrop';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'



function Login(props){
    const [modalIsOpen,setModalIsOpen]=useState(true);
    const history=useHistory();
    const {loginWithRedirect} = useAuth0()

    function handleLoginLocal(){
       /*TOda la lógica de autentificación local */
       loginWithRedirect();
     }

     function handleCancelAuth(){
        setModalIsOpen(false);
        history.replace('/');    
     }
     
     return (<div className='welcome-section'>
         {modalIsOpen&& <Backdrop onCancel={handleCancelAuth}/>}
        <div className ='login'>
            <img className='login-logo' src={props.logo} width="75" alt="SportFly Logo"></img>
            <h3>{props.title}</h3>

            
            <button className='login-btn'  onClick={handleLoginLocal}>Iniciar sección con 0Auth2.0</button>
            <button className='login-btn login-btn--alt' onClick={handleCancelAuth} >Cancelar</button>
            
        </div>
     </div>);

}

export default Login;