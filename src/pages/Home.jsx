import React from "react";
import mainImg from "../img/main_v.jpg";

export default function Home() {
  return (
    <main className='main_v'>
      <div className='main_v_bg'>
        <img src={mainImg} alt='유리찾자를 대표하는 자동차유리 이미지' />
      </div>
      <div
        className='main_txt'
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <h1>
          <span>신개념 자동차 유리 중개 플랫폼</span>
          <br />
          '유리찾자'
        </h1>
        <p>The destination for leaders who seek to change the world</p>
        <a href='/' className='button btnFade bgBlack'>
          자세히 보기
        </a>
      </div>
    </main>
  );
}
