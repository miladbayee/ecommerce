import { useContext } from "react"
import StateContex from "../context/stateContex"

const useStateContext = () => {
    const { state } = useContext(StateContex)
    return { state }
}

export default useStateContext