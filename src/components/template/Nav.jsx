import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem path='/' icon='home' name='Início' />
            <NavItem path='/users' icon='users' name='Usuários' />
            <NavItem path='dados-2' icon='users' name='Usuários1' />
            <NavItem path='dados-finalizar' icon='users' name='Usuários1' />
        </nav>
    </aside>