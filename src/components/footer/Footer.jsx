import React from 'react'
import './footer.css'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anshu</a>
      <ul className='permalinks'>
        <li> <a href="#">Home </a> </li>
        <li> <a href="#about">About </a> </li>
        <li> <a href="#experience">Experience</a> </li>
        
        <li> <a href="#portfolio">Portfolio </a> </li>
        
        <li> <a href="#contact">Contact </a> </li>
        <li> <a href="#profile">Profile </a> </li>

      </ul>
     

     <div className="footer__socials">
      <a href="https://facebook.com"><BiLogoFacebookSquare /></a>
      <a href="https://instagram.com"><BsInstagram /></a>

      <a href="https://twitter.com"><ImTwitter /></a>


     </div>
     

    </footer>
  )
}

export default Footer