import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Content from './pages/Content'
import Home from './pages/Home'
import History from './pages/History'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      < Header/>
      <Routes>
        <Route element={< Content/>} path='/'></Route>
        <Route element={< Home/>} path='/home'></Route>
        <Route element={< History/>} path='/history'></Route>
      </Routes>
      < Footer/>
    </>
  )
}

export default App
