import css from './login.scss'
import Backdrop from './Backdrop';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Login(props){
    const [modalIsOpen,setModalIsOpen]=useState(true);
    const history=useHistory();
    function handleLoginLocal(){
       /*TOda la lógica de autentificación local */
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
            <button className='login-btn'  onClick={handleLoginLocal}>Continuar con GitHub</button>
            <button className='login-btn'  onClick={handleLoginLocal}>Continuar con Gmail</button>
            <button className='login-btn'  onClick={handleLoginLocal}>Continuar con Facebook</button>
            <button className='login-btn'  onClick={handleLoginLocal}>Usar Estrategia Local</button>
            <button className='login-btn login-btn--alt' onClick={handleCancelAuth} >Cancel</button>
            
        </div>
     </div>);

}

export default Login;