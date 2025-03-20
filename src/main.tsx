import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import React from 'react'
import { Suspense } from 'react'
const Cart = React.lazy(()=> import ('./pages/cart.tsx'))


const router = createBrowserRouter([
  {
    path : "/cart",
    element : (
      <Suspense fallback={<div>Carregando...</div>}>
        <Cart/>
      </Suspense>
    ) 
  },
  {
    path : "/",
    element : <App/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
