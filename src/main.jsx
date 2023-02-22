import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './page/error/error'
import Root from './page/root/root'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import Token from './page/token/token'
import query from './query/query'
import AccountReward from './page/accountReward/accountReward'



const router = createBrowserRouter([
    {
      path: "/",
    element: <App name={"Total" } />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"/",
          element:<Root/>
          },
      ]
  },
  {
    path: "/account",
    element: <App name={"My Reward" } />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"/account",
          element:<AccountReward/>
          },
      ]
   },
   {
      path:"/uatr",
     element: <App name={ "uAtr"} />,
     errorElement: <ErrorPage />,
     children: [
       {
         path:"/uatr",
         element: <Token queryKey={"uatr"} query={query.uatr} />
        }
      ]
    },
    {
      path:"/uhar",
      element: <App name={"uHar" } />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/uhar",
          element: <Token queryKey={"uhar"} query={query.uhar} />
        }
      ]
      
    },
    {
      path:"/ucor",
      element:<App name={"uCor"}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/ucor",
          element: <Token queryKey={"ucor"} query={query.ucor } />
        }
      ]
    },
    {
      path:"/uord",
      element: <App name={ "uOrd"} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/uord",
          element: <Token queryKey={ "uord"} query={query.uord} />
        }
      ]
    },
    {
      path:"/scor",
      element: <App name={"sCor" } />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/scor",
          element: <Token queryKey={"scor"} query={query.scor } />
        }
      ]
    },
    {
      path:"/sord",
      element: <App name={"sOrd" } />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/sord",
          element: <Token queryKey={"sord"} query={ query.sord} />
        }
      ]
    },
  
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)
