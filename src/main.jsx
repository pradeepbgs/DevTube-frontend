import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/Store.js'
const Home = lazy(() => import('./components/Home.jsx'));
const Login = lazy(() => import('./components/Authentication/Login.jsx'));
const Signup = lazy(() => import('./components/Authentication/Signup.jsx'));
const LikedVideo = lazy(() => import('./components/pages/LikedVideo.jsx'));
const VideoListingPage = lazy(() => import('./components/videoListings/VideoListingPage.jsx'));
const History = lazy(() => import('./components/pages/History.jsx'));
const Watchpage = lazy(() => import('./components/watchpage/Watchpage.jsx'));
const ChannelDeatilsPage = lazy(() => import('./components/pages/channelDeatilsPage.jsx'));
const ChannelVideoPage = lazy(() => import('./components/pages/ChannelVideoPage.jsx'));
const ChannelPlayList = lazy(() => import('./components/pages/ChannelPlayList.jsx'));
const ChannelSubscribedPage = lazy(() => import('./components/pages/ChannelSubscribedPage.jsx'));
const ChannelPlaylistVideo = lazy(() => import('./components/pages/ChannelPlaylistVideo'));
const ChannelTweets = lazy(() => import('./components/pages/tweet/channelTweets.jsx'));
import Loader from './components/Loader.jsx';

const router  = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element: (
              <Suspense fallback={<Loader/>}>
               <Home/>
              </Suspense>
            )
          },
          {
            path: '/login',
            element: (
              <Suspense fallback={<Loader/>}>
                  <Login/>
              </Suspense>
            )
          },
          {
            path: '/signup',
            element: (
              <Suspense fallback={<Loader/>}>
                <Signup/>
              </Suspense>
            )
          },
          {
            path: '/liked-videos',
            element: (
              <Suspense fallback={<Loader/>}>
                <LikedVideo/>
              </Suspense>
            )
          },
          {
            path: '/results',
            element: (
              <Suspense fallback={<Loader/>}>
                <VideoListingPage/>
              </Suspense>
            )
          },
          {
            path: '/history',
            element: (
              <Suspense fallback={<Loader/>}>
                <History/>
              </Suspense>
            )
          },
          {
            path: "/watchpage/:videoId",
            element: (
              <Suspense fallback={<Loader/>}>
                <Watchpage/>
              </Suspense>
            )
          },
          {
            path: "/channel",
            element: (
              <Suspense fallback={<Loader/>}>
                <ChannelDeatilsPage/>
              </Suspense>
            ),
            children: [
              {
                path: "/channel/:username",
                element: (
                  <Suspense fallback={<Loader/>}>
                    <ChannelVideoPage/>
                  </Suspense>
                )
              },
              {
                path: "/channel/:username/playlist",
                element: (
                  <Suspense fallback={<Loader/>}>
                    <ChannelPlayList/>
                  </Suspense>
                )
                
              },
             
              {
                path: "/channel/:username/subscribed",
                element: (
                  <Suspense fallback={<Loader/>}>
                    <ChannelSubscribedPage/>
                  </Suspense>
                )
              },
              {
                path: "/channel/:username/tweets",
                element: (
                  <Suspense fallback={<Loader/>}>
                    <ChannelTweets/>
                  </Suspense>
                )
              }
            ]
          },
          {
            path: "/channel/:username/playlist/list/",
            element: (
              <Suspense fallback={<Loader/>}>
                <ChannelPlaylistVideo/>
              </Suspense>
            )
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
