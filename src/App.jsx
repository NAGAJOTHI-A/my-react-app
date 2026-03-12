import React, { Children } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './router/Home'
import Product from './router/Product'
import Cart from './router/Cart'
import Login from './router/Login'
import Shoes from './router/Shoes'
import './App.css'
import Dress from './router/Dress'
import Form from './router/Form'
import HomePage from './router/HomePage'
import ProductHome from './router/ProductHome'


let router=createBrowserRouter([
   {
      path:"/",
      element:<Home></Home>,
      children:[
         {
            index:true,
            element:<HomePage></HomePage>
         },{
            path:"/product",
            element:<Product></Product>,
            children:[{
               index: true,
               element:<ProductHome></ProductHome>,
            },{
               path:":category",
               element:<Shoes></Shoes>,
            }]
         },{
            path:"/cart",
            element:<Cart></Cart>
         },{
            path:"/login",
            element:<Login></Login>
         },{
            path:"/signup",
            element:<Form></Form>
         }
      ]
   }
])
const App = () => {
  return (
    <div id='main'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App