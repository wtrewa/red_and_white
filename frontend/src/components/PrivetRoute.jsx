


import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login'


export const PrivateRoute = ({children}) => {
const isAuth = useSelector(store=>store.authReducer.isAuth)
    if(!isAuth){
        return <Login/>
    }
  return (
    <div>{children}</div>
  )
}
