import { useCallback, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom";

const useTitle = () => {
    const { pathname } = useLocation()

    const path = useMemo(() => {
        return pathname.split('/')[1];
    }, [pathname])

    const changePageTitle = useCallback(() => {
        if (!path) {
            return document.title = 'Yas Ecommerce - Home'
        }
        return document.title = `Yas Ecommerce - ${path}`
    }, [path])


    useEffect(() => {
        changePageTitle()

        return () => {
            document.title = 'Yas Ecommerce'
        }

    })

}

export default useTitle