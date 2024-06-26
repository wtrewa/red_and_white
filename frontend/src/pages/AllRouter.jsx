
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import AddtoCart from './AddtoCart'
import { PrivateRoute } from '../components/PrivetRoute'


export const AllRouter = () => {
  return (
    <Routes>
     <Route  path='/'  element={<Home/>} />
     <Route  path='/signup'  element={<Signup/>} />
     <Route  path='/login'  element={<Login/>} />
     <Route  path='/addtocart'  element={ <PrivateRoute><AddtoCart/></PrivateRoute> } />
     <Route  path='*'  element={<h1>404 This Page Not Found</h1>} />
     
    </Routes>
  )
}
