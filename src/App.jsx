import { Outlet } from 'react-router-dom';
import {Header,Sidebar} from './components/index'

function App() {
  return (
    <div className='h-screen w-screen bg-black text-white flex flex-col bg-opacity-95'>
      <Header />
      <div className='flex  overflow-auto w-full h-full'>
        <div className=''>
        <Sidebar />
        </div>
        <div className='overflow-y-auto w-full h-full'>
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
