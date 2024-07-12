import React from 'react'
import Contact from './Contact'
import "../styles/pages/ContactPage.scss"
import Icon from "../assets/images/kitty.png"
import Container from '../components/Container/Container'
function ContactPage() {
  return (
    <Container>
    <div className='contact-page-container'>
           <h2 style={{textAlign: 'center', margin:0}}>Contact Me
        <span><img src={Icon} alt="Icon" width={80}/></span></h2>
        <Contact/>
    </div>
    </Container>
  )
}

export default ContactPage