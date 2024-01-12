import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='h-screen w-screen bg-black flex flex-col '>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <div className='overflow-y-auto '>
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
