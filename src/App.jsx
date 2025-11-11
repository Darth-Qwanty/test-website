import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login_copy from './pages/Login copy'
import Nav_Bar from './componenets/Nav_Bar'
import NotFound from './componenets/NotFound'
import Pokemon_api from './pages/Pokemon_api'




function App() {
  const [ShowNavBar, setShowNavBar] = useState(true)
  return(

    <BrowserRouter basename='/test-website'>
    <div className='screen' >
      {ShowNavBar && <Nav_Bar/>}
      <div className='Container' >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login_copy setShowNavBar={setShowNavBar}/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/test-website/register" element={<Registration setShowNavBar={setShowNavBar}/>}/>
          <Route path="/pokemon_info" element={<Pokemon_api/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
