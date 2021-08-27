import { useAuth0 } from "@auth0/auth0-react";
import {useState,useEffect,Fragment} from 'react'
import regeneratorRuntime from "regenerator-runtime";

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience=process.env.REACT_APP_AUTH0_AUDIENCE




function Infouser(props){
    const { user, getAccessTokenSilently,isAuthenticated} = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
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

// <p>{JSON.stringify(user).replace(/,/gi, ", ")}</p>

        return    <div className="welcome-section">
                    {isAuthenticated && (
                    <div>
                       
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
}

export default Infouser;