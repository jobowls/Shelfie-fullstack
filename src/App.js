import React from 'react'
import './App.css'
import Header from './Components/Header'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
// import Dashboard from './Components/Dashboard'

const App = (props) => {
  return (
    <HashRouter>
    <div className="App">
      <Header  />
      {/* <Dashboard  /> */}
      <div>
        {routes}
      </div>
      <footer className='footer'/>
    </div>
    </HashRouter>
  )
}
export default App
