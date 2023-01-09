import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NotFound from './components/NotFound'
// import InterventionsList from './components/InterventionsList'

const Root = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" component={App} />
            {/* <Route path="/liste-interventions" component={InterventionsList} /> */}
            {/* <Route component={NotFound} /> */}
        </Routes>
    </Router>
  )
}

export default Root