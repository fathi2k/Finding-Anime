import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './components/page/MainMenu.jsx'
import AnimeDetail from './components/page/AnimeDetail.jsx'


const routerr = createBrowserRouter([
  {
    path : '/',
    element : <MainPage/>

  },{
    path : '/detail/:id',
    element : <AnimeDetail/>
  }
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={routerr} />
  
)
