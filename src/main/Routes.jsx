import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Userform2 from '../components/user/Userform2'
import Userform3 from '../components/user/Userform3'
export default props =>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/dados-2" element={<Userform2/>} />
        <Route path="/dados-finalizar" element={<Userform3/>} />
        <Route path='/users' element={ <UserCrud/>} />
        <Route from='*' to='/' />
    </Routes>