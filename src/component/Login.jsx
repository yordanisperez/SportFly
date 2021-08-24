import css from './login.scss'
import Backdrop from './Backdrop';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
import {Button} from '@material-ui/core';
import {Build} from '@material-ui/icons';


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
     
     return (<div>
         {modalIsOpen&& <Backdrop onCancel={handleCancelAuth}/>}
        <div className ='login'>
            <img className='login-logo' src={props.logo} width="75" alt="SportFly Logo"></img>
            <h3>{props.title}</h3>

            <button className='login-btn'  onClick={handleLoginLocal}> <Build/>Estrategia Local</button>
            <button className='login-btn'  onClick={handleLoginLocal}>Autentificarse usando 0Auth2</button>
            <button className='login-btn login-btn--alt' onClick={handleCancelAuth} >Cancel</button>
            
        </div>
     </div>);

}

export default Login;