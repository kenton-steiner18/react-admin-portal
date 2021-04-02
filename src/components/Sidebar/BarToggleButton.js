import React from 'react'

import './BarToggleButton.css'
import * as FaIcons from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'




const BarToggleButton = props => {
    
    const auth = useAuth()
    let currentUser = auth.currentUser
    let menubutton = <></>

    if (currentUser) {
        menubutton = <button className="toggle-button bg-transparent" onClick={props.click}><FaIcons.FaBars style={{color: '#fff'}}/></button>
    }
    
    return(
        menubutton
    )
    }

export default BarToggleButton