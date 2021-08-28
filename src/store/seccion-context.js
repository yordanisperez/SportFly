import {createContext,useState} from 'react'


const SeccionContext=createContext({
    authentify:false,
    hint:[],
    addHint:(strHint)=>{},
    removeHint:(strHint)=>{},
    newIdHint:0,
});

export function SeccionContextProvider(props){
    const [authentify,setAuthentify]=useState(false);
    const [hint,setHint]=useState([]);
    const [newIdHint,setNewIdHint]= useState(1);

    function addHintHandle(strHint){
        setHint(hint.concat([{"hint":strHint,_id:newIdHint}]));
        setNewIdHint(newIdHint+1);
       // console.log("newIdHint: ",newIdHint);
    }
    function removeHintHandle(idStrHint){
        setHint(hint.filter((it)=>{return it._id!==idStrHint}));
    }
    const context = {
        authentify:authentify,
        setAuthentify:setAuthentify,
        hint:hint,
        addHint:addHintHandle,
        removeHint:removeHintHandle,
        newIdHint:newIdHint,
    };

    return <SeccionContext.Provider value={context}>
        {props.children}
    </SeccionContext.Provider>
}

export default SeccionContext;