import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/tamplate/Logo'
import Footer from '../components/tamplate/Footer'
import Nav from '../components/tamplate/Nav'
import Home from '../components/home/Home'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>

