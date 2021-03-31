import React from 'react'
import './Sidebar.css'

const SideBar = props => (
    <nav className='side-drawer'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Speakers</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Groups</a></li>
            <li><a href="/">Conference Information</a></li>
            <li><a href="/">Participants</a></li>
            <li><a href="/">Photo Gallery</a></li>
            <li><a href="/">Push Notifications</a></li>
        </ul>
    </nav>
);

export default SideBar