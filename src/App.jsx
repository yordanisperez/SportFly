import {useState,useEffect} from 'react'
import css from  './index.scss' 
import {Route,Switch} from 'react-router-dom';
import Navigation from './layout/Navigation'
import Login from './component/Login'
import logo from './LogoPalomaOpt.svg'
import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from './component/Backdrop';
import regeneratorRuntime from "regenerator-runtime";

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience=process.env.REACT_APP_AUTH0_AUDIENCE




const App=()=>{
    const [name,setName]=useState('');
    const { isLoading,user, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

//dev-csgmhfrr.us.auth0.com

    useEffect(() => {
        const getUserMetadata = async () => {

          try {
            const accessToken = await getAccessTokenSilently({
              audience:`https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
            console.log("Token de Access: ",accessToken);
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
            console.log(userDetailsByIdUrl);
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
                <div>
                    {JSON.stringify(user)}
                    <h3>User Metadata</h3>
                        {userMetadata ? (
                        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                        ) : (
                        "No user metadata defined"
                        )}                         
                </div>            
            </Route>  
            <Route path='/login' >
                <Login title= {'Su formulario de autentificarse personalizado'} logo={logo}></Login>
            </Route>    
         
        </Switch>


    </div>
}

export default App;