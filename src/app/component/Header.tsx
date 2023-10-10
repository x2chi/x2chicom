import React from 'react';

function Haeder() {
  return (
    <div className='header'>
        <div className='navbarbg'></div>
        <nav className='navbar'>
            <img src='./images/logo.png' id='logo' className='logoImg' />
            <a className='menu1'>HEADPHONES</a>
            <a className='menu2'>EARPHONES</a>
            <a className='menu3'>SPEAKERS</a>
            <a className='menu4'>EXPLORE</a>
            <img className='search' src="./images/searchIcon.png" alt="search" />
            <img className='member' src="./images/memberIcon.png" alt="member" />
            <img className='cart' src="./images/cartIcon.png" alt="cart" />
        </nav>
        <div className='mainBannerBox'>
            <div className='topBanners'>
                <img src='./images/mainImage.png' id='mainimage' />
                <div className='mainBannerTxt'>
                    <div className='mainBannerTxt1'>Beats Studio3 Wireless</div>
                    <div className='mainBannerTxt2'>Experience your<br />music like never before.</div>
                    <div className='buyBlock'>
                        <div className='buyPrice'>$299.95</div>
                        <div className='buyBtn'>BUY NOW</div>
                    </div>
                    <div className='txtPriceComm'>$60 Apple Music gift card with purchase of select Beats products.*</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Haeder;
