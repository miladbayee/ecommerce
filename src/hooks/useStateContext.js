import { useContext } from "react"
import StateContex from "../context/stateContex"

const useStateContext = () => {
    return useContext(StateContex)
}

export default useStateContext