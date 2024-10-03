import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom' 
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import CoinContextProvider from './context/CoinContext'
//import Footer from './components/Footer/Footer'


const App = () => {
  return(
    <CoinContextProvider>
    
    <div className='app'>
      <Navbar />
      <Routes>
        < Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>

      </Routes>
      
      
      
      
    </div>
    
   
    
    </CoinContextProvider>
  )
  
}

export default App
