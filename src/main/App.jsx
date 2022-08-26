import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/free-solid-svg-icons'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { NotificationContainer,  } from 'react-notifications'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'


export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <NotificationContainer />

        </div>
    </HashRouter>