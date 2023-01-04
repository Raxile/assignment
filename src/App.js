import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import MainInformation from './Information/pages/MainInformation'
import UpdateInfo from './Information/pages/UpdateInfo'
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <Routes>
      <Route exact path="/" element={ <MainInformation />} />
          <Route path="/updateinfo/:infoId" element={<UpdateInfo />} />
          <Route path="*" element={<Navigate to="/"/>} />
          </Routes>  
    </Router>

  )
}

export default App