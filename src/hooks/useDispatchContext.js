import { useContext } from "react"
import DispatchContex from "../context/dispatchContext"

const useDispatchContext = () => {
    return useContext(DispatchContex)
}

export default useDispatchContext