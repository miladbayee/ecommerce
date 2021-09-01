import { useCallback, useEffect, useState } from "react"
import Layout from "./Layout/Layout"

import useDispatchContex from './hooks/useDispatchContext'
import * as api from './services/productHttpService'
import { getAllProductsFailedAction, getAllProductsSuccessAction } from './context/stroeAction'

const App = () => {
  const [isCancelled, setIsCancelled] = useState(false);

  const { dispatch } = useDispatchContex()

  const getAllProducts = useCallback(async () => {
    try {
      const { data } = await api.get('/products')
      if (!isCancelled) {
        return dispatch(getAllProductsSuccessAction(data))
      }
    } catch {
      if (!isCancelled) {
        return dispatch(getAllProductsFailedAction())
      }
    }


  }, [dispatch, isCancelled])
  
  useEffect(() => {
    getAllProducts();

    return () => setIsCancelled(true)

  }, [getAllProducts])

  return (
    <>
      <Layout />
    </>
  )
}

export default App
