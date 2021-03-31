import React from 'react'

import './BarToggleButton.css'
import * as FaIcons from 'react-icons/fa'

import { IconContext } from 'react-icons'


const BarToggleButton = props => (
    <IconContext.Provider value={{color:'#fff'}}>
    <button className="toggle-button bg-transparent">
        <FaIcons.FaBars />
    </button>
    </IconContext.Provider>
)

export default BarToggleButton