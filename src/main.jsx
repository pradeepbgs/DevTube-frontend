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
  ChannelDeatilsPage,
  ChannelVideoPage,
  ChannelPlayList,
  ChannelTweets,
  ChannelSubscribedPage
} from './components/index.js'
import ChannelPlaylistVideo from './components/pages/ChannelPlaylistVideo.jsx'
import VideoListingPage from './components/videoListings/VideoListingPage.jsx'


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
            element: <VideoListingPage/>
          },
          {
            path: '/history',
            element:<History/>
          },
          {
            path: "/watchpage/:videoId",
            element: <Watchpage/>
          },
          {
            path: "/channel",
            element: <ChannelDeatilsPage/>,
            children: [
              {
                path: "/channel",
                element: <ChannelVideoPage/>,
              },
              {
                path: "/channel/playlist",
                element: <ChannelPlayList/>,
                
              },
             
              {
                path: "/channel/subscribed",
                element: <ChannelSubscribedPage/>
              },
              {
                path: "/channel/tweets",
                element: <ChannelTweets/>,
              }
            ]
          },
          {
            path: "/channel/playlist/list/",
            element: <ChannelPlaylistVideo/>,
          },
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
