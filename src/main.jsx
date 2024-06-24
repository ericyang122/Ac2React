import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import Noticias from './Pages/Noticias.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Home from './Pages/Home.jsx'
import PaginaFilmes from './Pages/PaginaFilmes.jsx'

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <App/>,
      children : [
        {index: true, element: <Home/> },
        {path : "filmes/:id" , element : <PaginaFilmes/>},
        {path : "noticias" , element : <Noticias/>},
        {path : "*" , element : <PageNotFound/>}

      ]
    }
   ]
)
  



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
