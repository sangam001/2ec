import * as Route from '@/constants/routes';
import logo from '@/images/logo-full.png';
import React from 'react';
import { useLocation } from 'react-router-dom';


const Footer = () => {
  const { pathname } = useLocation();


  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <h1>Contact US</h1>
          <form action='https://getform.io/f/c6289874-9ed7-4fb9-b657-1418d1d1ca95' method='POST'>
          <textarea type='text' name="message" placeholder='Message' style={{ width: "90%", height: '180px',}}></textarea>
          <button type='submit' className='btn' style={{position: 'relative', top:'-10px', marginTop: '20px', width: '90px', height: '30px', marginLeft: '-1px', backgroundColor: 'gray',
            color: 'white',
            border : 'none',
            textDecoration: 'none',
            fontSize: '16px',
        }}>Send</button>
          </form>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" style={{ width: '100%', height: '100%'}} src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <ul >
          <li><a style={{textDecoration: "none", color: 'gray', opacity: '0.8'}} href='/recommended'>Digital Services</a></li>
          <li><a style={{textDecoration: "none", color: 'gray', opacity: '0.8'}}href='/shop'>Products</a></li>
          <li><a style={{textDecoration: "none", color: 'gray', opacity: '0.8'}} href='/featured'>Featured</a></li>
          <li><a style={{textDecoration: "none", color: 'gray', opacity: '0.8'}} href='/'>Home</a></li>
        </ul>
        <strong>
          <span>
            <h2>Email:<span>vicousmanage@gmail.com</span></h2>
          </span>
          <ul>
            <a href='https://www.privacypolicygenerator.info/live.php?token=0cK6r9qHUAhz8vnkVSYiVkVS4cEqX8eo'>Privacy Policy</a><br></br>
            <a href='https://www.termsandconditionsgenerator.com/live.php?token=PX0Sxolx32jaicZd0WxGIzXqHhPS2b2L'>Terms&Coditions</a>
          </ul>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
