import React from 'react';

function Footer() {
  return (
      <div className='Footer'>

        <div className='footerBox'>

          <div className='footerLogoBox'><img src='./images/logo.png' id='logo' className='footerLogo' /></div>

          <div className='footerProductsBox'>
            <div className='footerProductsTitle footerTitle'>Products</div>
            <ul className='footerProductLinks footerList'>
              <li className='footerProductLink1'>HEADPHONES</li>
              <li className='footerProductLink1'>EARPHONES</li>
              <li className='footerProductLink1'>SPEAKERS</li>
              <li className='footerProductLink1'>ACCESSORIES</li>
              <li className='footerProductLink1'>COLLABORATIONS</li>
              <li className='footerProductLink1'>BEATSAUDIO</li>
              <li className='footerProductLink1'>SPECIAL OFFERS</li>
            </ul>
          </div>

          <div className='footerSupportsBox'>
            <div className='footerSupportsTitle footerTitle'>Support</div>
            <ul className='footerSupportLinks footerList'>
              <li className='footerSupportLink1'>PRODUCT HELP</li>
              <li className='footerSupportLink1'>SERVICE & WARRANTY</li>
              <li className='footerSupportLink1'>REGISTER YOUR BEATS</li>
              <li className='footerSupportLink1'>UPDATE YOUR BEATS</li>
              <li className='footerSupportLink1'>AUTHORIZED SERVICE PROVIDERS</li>
              <li className='footerSupportLink1'>CONTACT SUPPORT</li>
              <li className='footerSupportLink1'>INTERNATIONAL NUMBERS</li>
            </ul>
          </div>

          <div className='footerCompanysBox'>
            <div className='footerCompanysTitle footerTitle'>Company</div>
            <ul className='footerCompanyLinks footerList'>
              <li className='footerSupportLink1'>PRODUCT HELP</li>
              <li className='footerCompanyLink1'>NEWS AND EVENTS</li>
              <li className='footerCompanyLink1'>PROMOTION TERMS</li>
              <li className='footerCompanyLink1'>PRIVACY POLICY</li>
              <li className='footerCompanyLink1'>TRADEMARK</li>
              <li className='footerCompanyLink1'>TERMS OF USE</li>
              <li className='footerCompanyLink1'>COOKIES</li>
            </ul>
          </div>

          <div className='footerFollowUsBox'>
            <div className='footerFollowUsTitle footerTitle'>Follow Us</div>
            <div><img src="images/snsFollowUsIcons.png" alt="Follow Us"/></div>
          </div>

        </div>

        <div className='copyright'>Copyright © 2020 Apple Inc. - All rights reserved.</div>

      </div>
  );
}

export default Footer;
