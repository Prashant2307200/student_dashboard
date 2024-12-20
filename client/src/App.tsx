import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar' 
import './App.css'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <main>
      <ToastContainer />
      <div className='flex gap-5'>
        <Sidebar />
        <div className='ml-5 md:ml-0 flex flex-1 flex-col mr-5'>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </main>
  )
}
