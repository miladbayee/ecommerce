import Card from "../Pages/Card"
import Catalog from "../Pages/Catalog"
import Home from "../Pages/Home"
import Product from "../Pages/Product"
import Invoice from "../Pages/Invoice"
import { Route, Switch } from "react-router-dom"

const Roustes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/catalog' exact component={Catalog} />
            <Route path='/catalog/:slug'  component={Product} />
            <Route path='/card' component={Card} />
            <Route path='/invoice' component={Invoice} />
        </Switch>
    )
}

export default Roustes
