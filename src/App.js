import React, { Component } from 'react'
import Navbar from './pages/Navbar'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'

export default class componentName extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
