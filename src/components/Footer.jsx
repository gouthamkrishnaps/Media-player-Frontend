import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='container justify-content-center align-items-center d-flex w-100 flex-column'>
      <div className="row">
        <div className="col-4 media-player-about">
          <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
            <i class="fa-solid fa-video fa-beat-fade" style={{color:'gold'}}></i>{' '}
            Media Player
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis doloribus rem praesentium rerum laborum velit eaque adipisci, maiores ipsam
          </p>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6 links flex-column d-flex">
              <h4>Links</h4>
              <Link className='footer-links' to={'/'}>Landing page</Link>
              <Link className='footer-links' to={'/home'}>Home page</Link>
              <Link className='footer-links' to={'/watch-history'}>Watch History</Link>
            </div>
            <div className="col-6 guides flex-column d-flex">
              <h4>Guides</h4>
              <Link className='footer-links' to={'https://bootswatch.com'}>React</Link>
              <Link className='footer-links' to={'https://react-bootstrap.github.io'}>React Bootsrap</Link>
              <Link className='footer-links' to={'https://bootswatch.com'}>Boots Watch</Link>
            </div>
          </div>

        </div>
        <div className="col-4 contacts">
            <h4>Contact Us</h4>
            <form action="" className='footer-form'>
              <div className='d-flex gap-1'>
                <input className='contact-input w-100' type='text' placeholder='Enter your e-mail address'/>
                <button className='contact-input-btn bg-warning'>Subscribe</button>
              </div>
            </form>
            <div className="social-media justify-content-evenly align-items-center d-flex p-2">
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-instagram fa-2x" style={{color:'white'}}></i></Link>
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-whatsapp fa-2x" style={{color:'white'}}></i></Link>
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-x-twitter fa-2x" style={{color:'white'}}></i></Link>
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-linkedin fa-2x" style={{color:'white'}}></i></Link>
            </div>
        </div>
        
      </div>
      <div className='p-2'><p>Copyright ©️ 2023 Media-Player. Built with react</p></div>
    </div>
  )
}

export default Footer