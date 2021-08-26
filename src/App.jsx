import {useState,useEffect,Fragment} from 'react'
import css from  './index.scss' 
import {Route,Switch} from 'react-router-dom';

import Layout from './layout/Layout'
import Login from './component/Login'
import logo from './LogoPalomaOpt.svg'
import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from './component/Backdrop';
import regeneratorRuntime from "regenerator-runtime";

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience=process.env.REACT_APP_AUTH0_AUDIENCE



const App=()=>{
    const { isLoading,user, getAccessTokenSilently,isAuthenticated} = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

//dev-csgmhfrr.us.auth0.com

    useEffect(() => {
        const getUserMetadata = async () => {

          try {
            const accessToken = await getAccessTokenSilently({
              audience:`https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
          //  console.log("Token de Access: ",accessToken);
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
         //   console.log(userDetailsByIdUrl);
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              
            });
      
            const { user_metadata } = await metadataResponse.json();
      
            setUserMetadata(user_metadata);
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getUserMetadata();
      }, [getAccessTokenSilently, user?.sub]);




   
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
              <div className="welcome-section">
                {isAuthenticated && (
                  <div>
                    <p>{JSON.stringify(user).replace(/,/gi, ", ")}</p>
                    <h3>User Metadata</h3>
                    {userMetadata ? (
                      <pre>
                        {JSON.stringify(userMetadata, null, 2).replace(
                          /,/gi,
                          ", "
                        )}
                      </pre>
                    ) : (
                      "No user metadata defined"
                    )}
                  </div>
                )}
              </div>
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