import {Link} from 'react-router-dom';
import {useContext} from 'react';
import SeccionContext from '../store/seccion-context';
import logo from '../LogoPalomaOpt.svg'
import css from './navigation.scss'

function Navigation(){
    const seccionCtx=useContext(SeccionContext);
    return (
      <div id="header">
        <Link to="/">
            <img className='navigation-logo' src={logo} width="75" alt="SportFly Logo"></img>
        </Link>
        <h1>Un modulo de authentificación </h1>
        <nav className='navigation-nav'>
          <ul className='navigation-ul'>
           {!seccionCtx.authentify? 
                <li className='navigation-li'>
                <Link className='navigation-link' to="/login">Login</Link>
                </li>
                :
                <li className='navigation-li'>
                <Link className='navigation-link' to="/logout">Logout</Link>
                </li> 
            }           
          </ul>
        </nav>

      </div>
    );
}

export default Navigation;