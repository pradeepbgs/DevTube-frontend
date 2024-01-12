import { Outlet } from 'react-router-dom';
import {Header,Sidebar} from './components/index'

function App() {
  return (
    <div className='h-screen w-screen bg-black flex flex-col bg-opacity-95'>
      <Header />
      <div className='flex flex-1 overflow-hidden w-full h-full'>
        <Sidebar />
        <div className='overflow-y-auto '>
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
