import React, {useState, useEffect} from 'react'
import routes from './route/routes'
import { Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'


import './App.css'

function App() {
  return (
    <React.Fragment>
      <Layout/>
      {routes.map((route,index)=>{
        return(
          <Routes key={index}>
             <route.route
              path={route.path}
              exact={route.exact}
              element={<route.component/>}
              />
          </Routes>
        )
      })
    }
    </React.Fragment>
  )
}
export default App
