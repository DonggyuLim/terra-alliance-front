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
    element: <App name={"Account Reward" } />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"/account",
          element:<AccountReward />
          },
      ]
   },
   {
      path:"/uatr",
     element: <App name={ "Atr"} />,
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
      element: <App name={"Har" } />,
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
      element:<App name={"Cor"}/>,
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
      element: <App name={ "ORD"} />,
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
      element: <App name={"SCOR" } />,
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
      element: <App name={"SORD" } />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/sord",
          element: <Token queryKey={"sord"} query={ query.sord} />
        }
      ]
  },
  {
    path:"/satr",
    element: <App name={"SATR" } />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/satr",
        element: <Token queryKey={"satr"} query={ query.satr} />
      }
    ]
  },
  {
    path:"/shar",
    element: <App name={"SHAR" } />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/shar",
        element: <Token queryKey={"shar"} query={ query.shar} />
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
