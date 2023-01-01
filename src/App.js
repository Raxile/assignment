import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App = () => {
  return (
    <Router>
      <MainNavigation/>
    </Router>

  )
}

export default App