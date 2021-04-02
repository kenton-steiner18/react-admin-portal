import React, { useState } from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const SideBar = props => {

    const auth = useAuth()
    const [error,setError] = useState('')
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await auth.logout()
            history.push('/login')
        } catch {
            setError("Failed to log out")
        }
    }

    let sideBarclasses = "side-bar"
    if (props.show) {
        sideBarclasses = 'side-bar open'
    }

    return (
        <nav className={sideBarclasses}>
            <div className="header">Admin Portal
                <div className="close-button" onClick={props.closeClickHandler}>
                    <AiIcons.AiOutlineClose />
                </div>
            </div>
            <ul>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className='nav-text' onClick={props.closeClickHandler}>
                            <a href={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </a>
                        </li>
                    )
                })}
                <li className='nav-text' onClick={props.closeClickHandler}>
                    <a onClick={handleLogout}>
                        <IoIcons.IoMdLogOut />
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar