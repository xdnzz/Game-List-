import Routes from './routes'
import './style.css'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

export default function App(){
  return (
    <div>
      <ToastContainer autoClose={2000}/>
     <Routes/>
    </div>
  )
}
