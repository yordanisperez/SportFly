import {Link} from 'react-router-dom';
import {useContext} from 'react';
import SeccionContext from '../store/seccion-context';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../LogoPalomaOpt.svg'
import css from './navigation.scss'

function Navigation(){
    const seccionCtx=useContext(SeccionContext);
    const { isAuthenticated ,logout,user} = useAuth0();

    function handleLogout(){
        logout();
    }
    //

    return (
      <div id="header">
        <Link to="/">
            <img className='navigation-logo' src={logo} width="75" alt="SportFly Logo"></img>
        </Link>
        <h1>Un modulo de autentificación </h1>
        <div>
         {isAuthenticated&&<img className={'header-user-img'} src={user.picture} key={user.id} alt={user.name} />}
            
         
        </div>
        <nav className='navigation-nav'>
          <ul className='navigation-ul'>
           {!isAuthenticated? 
                <li className='navigation-li'>
                <Link className='navigation-link' to="/login">Login</Link>
                </li>
                :
                
                <li className='navigation-li'>
                  <Link className='navigation-link' to="/" onClick={handleLogout}>Logout</Link>
                </li> 
                
            }           
          </ul>
        </nav>

      </div>
    );
}

export default Navigation;