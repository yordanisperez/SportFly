import {render} from 'react-dom'
import {Auth0Provider} from '@auth0/auth0-react'
import {BrowserRouter} from 'react-router-dom';

import App from './App'
import {SeccionContextProvider} from './store/seccion-context'



const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience=process.env.REACT_APP_AUTH0_AUDIENCE

render(
    <SeccionContextProvider>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin  }
                audience={`https://${domain}/api/v2/`}
                scope="read:current_user update:current_user_metadata"
                >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </SeccionContextProvider>,
    document.getElementById("app"));