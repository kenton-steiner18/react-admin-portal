import React, { Component } from 'react'
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
import Backdrop from './Backdrop/Backdrop'


class App extends Component {
  state = {
    sideBarOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideBarOpen: false })
  }

  closeClickHandler = () => {
    this.setState({ sideBarOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <AuthProvider>
          <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100%" }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideBar show={this.state.sideBarOpen} closeClickHandler={this.closeClickHandler} />
            {backdrop}
            <div id='page-wrap' className="w-100 card-div" style={{ maxWidth: '450px' }}>
              <Switch>
                <PrivateRoute exact path="/" component={Homepage} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
              </Switch>
            </div>
          </Container>
        </AuthProvider>
      </Router>
    )
  }
}
export default App
