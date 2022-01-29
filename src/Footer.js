import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' style={{height:"20vh"}}>
      <div className='footer-links'>
        <div className="leftFooter">
          <div className='footer-link-items'>
            {/* <h2 style={{marginTop:-10}}>The resume</h2> */}
            {/* <p style={{textAlign: 'left'}}>........................</p> */}
          </div>
          <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
          <h5 style={{color:"white"}}>Follow Us:</h5><br/>
          <Link
              className='social-icon-link facebook ml-2'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
            <i className='fa fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram ml-2'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fa fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube ml-2'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fa fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter ml-2'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fa fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter ml-2'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fa fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
          </div>
          <div className="centerFooter">
          <div className='footer-link-items'>
            <h2 style={{color:'white'}}>....</h2>
            <p></p>
            {/* <p 	className='fas fa-map-marker-alt' style={{color:'white'}}>.........</p> */}
            {/* <p></p> */}
            <p className='fa fa-phone'>+91 ........</p>
            <p></p>
            <p className='fa fa-envelope'>ourmai@gmail.com</p>
          </div>
          </div>
          <div className="rightFooter">
          <div className='footer-link-items'>
          {/* <h2 style={{color:'white'}}>........</h2> */}
            {/* <h2 style={{color:'white',paddingTop:20}}>.....</h2> */}
            {/* <span style={{display:'inline',color:'white',fontSize:16}} >Site Map </span> */}
            <span style={{display:'inline',color:'white',fontSize:16}} >Contact Us</span>
          </div>
      
        </div>
    
      </div>
      
    </div>
  );
}

export default Footer;
