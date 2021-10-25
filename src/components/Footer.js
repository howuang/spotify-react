import React from 'react';
import logo from './images/logo.png'
import ig from './images/ig.png'
import fb from './images/fb.png'
import twitter from './images/twitter.png'
import usa from './images/usa.jpg'

const Footer = () => {
    return <footer>
    <div className="container">
        <div className="row1">
          <div className="info">
            <div className="footer-logo">
              <img src={logo} width="130" />
            </div>
            <div className="column">
              <div className="footer-heading">Company</div>
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">For the Record</a>
            </div>
            <div className="column">
              <div className="footer-heading">Communities</div>
              <a href="#">For Artists</a>
              <a href="#">Developers</a>
              <a href="#">Brands</a>
              <a href="#">Investors</a>
              <a href="#">Vendors</a>
            </div>
            <div className="column">
              <div className="footer-heading">Useful Links</div>
              <a href="#">Support</a>
              <a href="#">Web Player</a>
              <a href="#">Free Mobile App</a>
              <a href="#">2020 Wrapped</a>
            </div>
          </div>
          <div className="icons">
            <a className="icon" href="#">
              <img src={ig} width="30" />
            </a>
            <a className="icon" href="#">
              <img src={fb} width="30" />
            </a>
            <a className="icon" href="#">
              <img src={twitter} width="30" />
            </a>
          </div>
        </div>
        <div className="row2">USA <img src={usa} width="20" /></div>
        <div className="row3">
          <div className="row3-right">
            <a href="#">Legal</a>
            <a href="#">Privacy Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Additional CA Privacy Disclosures</a>
          </div>
          <div>© 2020 Spotify AB</div>
        </div>
      </div>
</footer>
}

export default Footer;