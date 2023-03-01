import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './containers/Dashboard'

import PrivateRoutes from './hocks/PrivateRoute'

import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'


import Layout from './hocks/Layout'
import store from './store'


const App = () => (
  <Provider store={store}>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </Layout>
  </Provider>
)

export default App
