import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainInformation from './Information/pages/MainInformation'
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <MainInformation />
    </Router>

  )
}

export default App