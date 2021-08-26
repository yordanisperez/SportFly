import {Fragment} from 'react'
import css from  './index.scss' 
import {Route,Switch} from 'react-router-dom';

import Layout from './layout/Layout'
import Login from './component/Login'
import logo from './LogoPalomaOpt.svg'
import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from './component/Backdrop';
import Infouser from './component/Infouser'




const App=()=>{
    const { isLoading,isAuthenticated} = useAuth0();
 
    if (isLoading) {
        return <div className="welcome-section"> 
                <Backdrop>

                </Backdrop>
            Loading ...
            </div>;
      }

    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/" exact>
             { isAuthenticated&&!isLoading&&<Infouser/>}
 
            
            </Route>
            <Route path="/login">
              <Login
                title={"Inicie sección con sus pérfiles de redes sociales"}
                logo={logo}
              ></Login>
            </Route>
          </Switch>
        </Layout>
      </Fragment>
    );
}

export default App;