import React, { Component } from 'react'
import Signup from './Signup'
import Homepage from './Homepage'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import SideBar from './Sidebar/Sidebar'

import Toolbar from './Toolbar/Toolbar'
import '../App.css'


function App() {
  return (
    <Router>
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100%" }}>
    <Toolbar />
    <SideBar />
      <div id='page-wrap' className="w-100" style={{ maxWidth: '450px' }}>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Homepage} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
      </div>
    </Container>
    </Router>
  )
}
export default App;
