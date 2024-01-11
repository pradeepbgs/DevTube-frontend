import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter , RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'


const router  = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/login',
            element: <Login/>
          }
        ]
      }
])  



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
