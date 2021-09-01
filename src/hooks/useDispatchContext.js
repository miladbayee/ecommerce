import { useContext } from "react"
import DispatchContex from "../context/dispatchContext"

const useDispatchContext = () => {
    const { dispatch } = useContext(DispatchContex);
    return { dispatch }
}

export default useDispatchContext