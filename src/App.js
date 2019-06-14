import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import NotFound from './pages/notFound'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/admin/analytics/" component={Analytics} />
          <PrivateRoute exact path="/admin/empresa/" component={AdminEmpresa} />
          <PrivateRoute exact path="/admin/productos/" component={AdminProducts} />
          <PrivateRoute exact path="/admin/categorias/" component={AdminProductsCategories} />
          <PrivateRoute exact path="/admin/productos/editar/:id" component={AdminEditProduct} />
          <PrivateRoute exact path="/admin/productos/nuevo/" component={AdminEditProduct} /> */}
          
          {/* <Route exact path="/productos" component={Products} />
          <Route exact path="/productos/:categoria" component={Products} />
          <Route exact path="/producto/:id" component={Product} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/contacto/:productId" component={Contact} /> */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
