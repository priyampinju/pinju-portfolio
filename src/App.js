import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projectss from './components/Projectss';
import Contacts from './components/Contacts'

const App = () => {
  return (
    <>
    <NavBar/>
    <Banner />
    <Skills />
    <Projectss />
    <Contacts />
    </>
  )
}

export default App
