import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/Store.js'
import {
  Home,
  Login,
  Signup,
  LikedVideo,
  VideoListings,
  History,
  Watchpage,
} from './components/index.js'

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
            path: '/liked-videos',
            element: <LikedVideo/>
          },
          {
            path: '/results',
            element: <VideoListings/>
          },
          {
            path: '/history',
            element:<History/>
          },
          {
            path: "/watchpage",
            element: <Watchpage/>
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
