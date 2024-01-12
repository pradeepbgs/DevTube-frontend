import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter , RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import store from './utils/Store.js'

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
          },
          {
            path: '/signup',
            element: ""
          },
          {
            path: '/likde-videos',
          }
        ]
      }
])  



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
