import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'

export const SidebarData= [
    {
        title: 'Home',
        path: '/',
        icon: <IoIcons.IoIosHome />,
        cName: 'nav-text'
    },{
        title: 'Speakers',
        path: '/',
        icon: <GiIcons.GiPublicSpeaker />,
        cName: 'nav-text'
    },{
        title: 'Participants',
        path: '/',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
    },{
        title: 'Groups',
        path: '/',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },{
        title: 'Photo Gallery',
        path: '/',
        icon: <IoIcons.IoMdPhotos />,
        cName: 'nav-text'
    },{
        title: 'Events',
        path: '/',
        icon: <MdIcons.MdEvent />,
        cName: 'nav-text'
    },{
        title: 'Push Notifications',
        path: '/',
        icon: <IoIcons.IoMdNotifications />,
        cName: 'nav-text'
    },{
        title: 'Conference Information',
        path: '/',
        icon: <IoIcons.IoMdSettings />,
        cName: 'nav-text'
    },
]