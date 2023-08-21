import React from 'react';
import  Header  from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from'./components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Profile from './components/profile/Profile'

 const App = () => {
  return (
    <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Portfolio />
         <Contact />
         <Profile />
         <Footer />
    </>
  )
}
export default App
