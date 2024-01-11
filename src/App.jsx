import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'


function App() {
 
  return (
    <>
    <div className='h-[100vh] w-full bg-gray-200'>
    <Header/>
    <div>
    <div className='flex w-full h-[] bg-red-200'>
    <Sidebar/>
    <Outlet/>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
