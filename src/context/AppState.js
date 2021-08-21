import { useReducer } from "react"
import DispatchContex from "./dispatchContext"
import StateContex from "./stateContex"
import initialState from "./initialState";
import reducer from './storeReducer'

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <DispatchContex.Provider value={{dispatch}}>
            <StateContex.Provider value={{state}}>
                {children}
            </StateContex.Provider>
        </DispatchContex.Provider>
    )
}

export default AppState