import React from 'react'
import './profile.css'

const Profile = () => {
  return (
    <section id='profile'>
    <h5>Cp profiles</h5>
    <h2 className='fontColor'>Fueling my passion for problem-solving through competitive programming</h2>
    <div className='container profile__container'>
      <article className='profile__item'>
       
       
       <div className="profile__item-cta">
       <a href='https://www.codechef.com/users/ans_u1234' className='btn'>Codechef</a>
       </div>
      </article>
      <article className='profile__item'>
       
       
       <div className="profile__item-cta">
       <a href='https://leetcode.com/anshu_14/' className='btn'>leetcode</a>
       </div>
      </article>
      
    </div>
  </section>
  )
}

export default Profile