import React from 'react'

import './Toolbar.css'
import BarToggleButton from '../Sidebar/BarToggleButton'

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbsar__navigation">
      <div> <BarToggleButton /> 
      
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar