import Card from "../Pages/Card"
import Catalog from "../Pages/Catalog"
import Home from "../Pages/Home"
import Product from "../Pages/Product"
import { Route, Switch } from "react-router-dom"

const Roustes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/catalog' component={Catalog} />
            <Route path='/catalog/:slug' component={Product} />
            <Route path='/card' component={Card} />
        </Switch>
    )
}

export default Roustes
