import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import mainImg from "../img/main_v.jpg";
import svImg4 from "../img/services-4.jpg";
import svImg2 from "../img/services-2.jpg";
import svImg3 from "../img/services-3.jpg";
import { TbSitemap, TbBusinessplan } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import CountUp from "react-countup";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  return (
    <>
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
          <Link to='/company' className='button btnFade bgBlack'>
            자세히 보기
          </Link>
        </div>
      </main>
      <section id='services' className='services'>
        <div className='container' data-aos='fade-up'>
          <div className='section-header'>
            <h2>Our Services</h2>
            <p>
              유리찾자에서 일반적인 유리 뿐 아니라 구하기 어려운 오래된 차종과
              비싼 수입차 유리도 쉽게 검색하고 구매할 수 있을 뿐 아니라 여러가지
              편의를 제공합니다.
            </p>
          </div>

          <div className='row gy-5'>
            <div
              className='col-xl-4 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <div className='service-item'>
                <div className='img'>
                  <img src={svImg2} className='img-fluid' alt='' />
                </div>
                <div className='details position-relative'>
                  <div className='icon'>
                    <TbBusinessplan />
                  </div>
                  <a
                    href='#!'
                    className='stretched-link'
                    onClick={() =>
                      handleOpenNewTab(
                        "https://ins.thekauto.co.kr/InsuranceClaim/InsuranceClaim"
                      )
                    }
                  >
                    <h3>자동차 보험 청구 프로그램 제공</h3>
                  </a>
                  <p>
                    자체 개발한 자동차 유리 보험 청구프로그램(자동차 점검,정비
                    견적서, 전자세금계산서등)을 무상으로 제공 합니다.
                  </p>
                  <p className='btn btn-outline-dark mt-3'>프로그램 바로가기</p>
                </div>
              </div>
            </div>

            <div
              className='col-xl-4 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <div className='service-item'>
                <div className='img'>
                  <img src={svImg3} className='img-fluid' alt='' />
                </div>
                <div className='details position-relative'>
                  <div className='icon'>
                    <GiTeacher />
                  </div>
                  <Link to='/company' className='stretched-link'>
                    <h3>교육 프로그램 제공</h3>
                  </Link>
                  <p>
                    정확하고 안전한 자동차 유리 교체 및 복원을 위한 제품에 따른
                    체계적이고 선진적인 교육 프로그램을 제공합니다.
                  </p>
                  <p className='btn btn-outline-dark mt-3'>자세히보기</p>
                </div>
              </div>
            </div>
            <div
              className='col-xl-4 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <div className='service-item'>
                <div className='img'>
                  <img src={svImg4} className='img-fluid' alt='' />
                </div>
                <div className='details position-relative'>
                  <div className='icon'>
                    <TbSitemap />
                  </div>
                  <a
                    href='#!'
                    className='stretched-link'
                    onClick={() =>
                      handleOpenNewTab("https://safetyglass.co.kr/")
                    }
                  >
                    <h3>자동차 유리 쇼핑몰 할인 혜택</h3>
                  </a>
                  <p>
                    자사에서 운영하는 자동차 유리쇼핑몰에서 유리교체에 필요한
                    공구, 접착제 등을 할인해서 판매합니다.
                  </p>
                  <p className='btn btn-outline-dark mt-3'>쇼핑몰 바로가기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='counts' className='counts'>
        <div className='container'>
          <div className='text-center title'>
            <h2>안전한 배송! 지역전문가</h2>
            <p>
              순정과 비순정 제품을 판별하고, 파손이나 스크래치를 검증한 후
              유리를 픽업하고 검수한 후 배송까지 책임집니다.
              <br />
              유리찾자와 함께라면 파손이 쉬운 자동차유리 안전하게 받아 보실 수
              있습니다.
            </p>
          </div>

          <div className='row counters position-relative'>
            <div className='col-lg-3 col-6 text-center'>
              <CountUp start={1} end={60} duration={1.0}></CountUp>
              <p>지역전문가</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              <CountUp start={1} end={10} duration={1.0}></CountUp>
              <p>파트너사</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              <CountUp start={1} end={800} duration={1.0}></CountUp>
              <p>유리교체점</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              <CountUp start={1} end={400} duration={1.0}></CountUp>
              <p>자동차 유리 정비조합</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
