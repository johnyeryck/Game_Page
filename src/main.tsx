import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import React from 'react'
import { Suspense } from 'react'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Creator from './pages/Creator.tsx'
import LoginPage from './pages/login.tsx'
const queryClient = new QueryClient()



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
  },
  {
    path : "/creator",
    element : <Creator/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>

    </QueryClientProvider>
  </StrictMode>,
)
