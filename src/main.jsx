import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Authentication/Login.jsx'
import { Provider } from 'react-redux'
import store from './utils/Store.js'
import VideoListings from './components/videoListings/VideoListings.jsx'
import Signup from './components/Authentication/Signup.jsx'

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
            element: <Signup/>
          },
          {
            path: '/likde-videos',
          },
          {
            path: '/results',
            element: <VideoListings/>
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
