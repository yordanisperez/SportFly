import {render} from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import {SeccionContextProvider} from './store/seccion-context'


render(
    <SeccionContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </SeccionContextProvider>,
    document.getElementById("app"));