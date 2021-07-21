import React, { Component } from 'react'
import Navbar from './pages/Navbar'
import './App.css'
import {BrowserRouter} from 'react-router-dom'

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
