import React from 'react'
import Signup from './Signup'
import Homepage from './Homepage'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Navbar from './Navbar/Navbar'


function App() {
  return (
    <Router>
    <Navbar />
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '450px' }}>
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
