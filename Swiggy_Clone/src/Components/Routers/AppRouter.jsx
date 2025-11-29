

import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        
             <Routes>
                
                  <Route path='/home' element={<Home/>}></Route>
             </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}

export default AppRouter
