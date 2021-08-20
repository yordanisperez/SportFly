import {createContext,useState} from 'react'


const SeccionContext=createContext({
    authentify:false,
});

export function SeccionContextProvider(props){
    const [authentify,setAuthentify]=useState(false)

    const context = {
        authentify:authentify,
        setAuthentify:setAuthentify,
    };

    return <SeccionContext.Provider value={context}>
        {props.children}
    </SeccionContext.Provider>
}

export default SeccionContext;