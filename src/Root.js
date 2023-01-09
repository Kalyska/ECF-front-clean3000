import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NotFound from './components/NotFound'
// import New from './components/New'
// import InterventionsList from './components/InterventionsList'

const Root = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<App />} />
            {/* <Route path="/nouveau-bon" element={<New/>} /> */}
            {/* <Route path="/liste-interventions" element={<InterventionsList/>} /> */}
            {/* <Route element={<NotFound/>} /> */}
        </Routes>
    </Router>
  )
}

export default Root