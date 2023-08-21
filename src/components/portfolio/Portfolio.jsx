import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chat.png' 
import IMG2 from '../../assets/psw.png' 

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Chatbot</h3>
         <div className="portfolio__item-cta">
         <a href='https://github.com/' className='btn'>Github</a>
          <a href='https://lucky-youtiao-e61656.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>PasswordGenerator</h3>
         <div className="portfolio__item-cta">
         <a href='https://github.com/' className='btn'>Github</a>
          <a href='https://roaring-mooncake-354c67.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio