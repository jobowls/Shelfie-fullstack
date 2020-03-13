import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/form' component={Form} />
        <Route path='/form/:id' component={Form} />
    </Switch>
)
