import {createContext,  useEffect, useReducer} from 'react';
import { createAction } from '../utils/Reducer/Reducer.utils';
import { onAuthStateChangeLister, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';


export const UserContext = createContext ({
    currentUser: null,
    setCurrentUser: ()=> null,
});

export const USER_ACTION_TYPES ={
SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const UserReducer = (state, action) =>{
const {type, payload} = action;    

  switch (type) {

    case 'SET_CURRENT_USER': 
return {
    ...state,
    currentUser: payload

}
    default: 
    throw new Error(`unhandled type ${type} in UserReducer`);
  };
};

const INITIAL_STATE = {
    currentUser: null 
}

export const UserProvider = ({children})=>{
//const [ currentUser, setCurrentUser ] = useState(null);
const [{ currentUser }, dispatch ] = useReducer( UserReducer, INITIAL_STATE );

const setCurrentUser = (user) => {
dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

}


const value = {currentUser, setCurrentUser };
    
    useEffect(()=>{
       const unsubscribe= onAuthStateChangeLister((user)=>{
        if(user){
        createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
       })
       return unsubscribe;

    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

