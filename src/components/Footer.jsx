import React, { useEffect } from "react";
import logo from "../img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  });
  return (
    <footer>
      <div className='ft_wrap'>
        <div
          className='ft_logoBox'
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-duration='1500'
        >
          <img src={logo} alt='유리찾자 로고' />
          <h3>Join The Success!</h3>
          <a href='/' className='button btnFade bgBlack'>
            Join Us
          </a>
        </div>
        <div
          className='ft_infoBox'
          data-aos='fade-right'
          data-aos-delay='600'
          data-aos-offset='300'
          data-aos-duration='1500'
        >
          <h3>Info</h3>
          <p className='eng_txt'>
            031-546-3694
            <br />
            <a href='mailto:joonnam.lee@sasystem.co.kr'>
              joonnam.lee@sasystem.co.kr
            </a>
          </p>

          <h3>Address</h3>
          <p>(18322) 경기도 화성시 봉담읍 주석로 1166-3</p>

          <h3>Follow</h3>
          <i className='fa-brands fa-youtube'></i>
          <i className='fa-brands fa-facebook-f'></i>
          <i className='fa-brands fa-instagram'></i>
        </div>
      </div>
    </footer>
  );
}
