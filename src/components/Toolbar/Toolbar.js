import React from 'react'

import './Toolbar.css'
import BarToggleButton from '../Sidebar/BarToggleButton'

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div onClick={props.drawerClickHandler}> 
        <BarToggleButton /> 
      </div>
    </nav>
  </header>
)

export default Toolbar