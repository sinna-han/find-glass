import React, { useEffect } from "react";
import SubTitle from "../components/SubTitle";
import svImg1 from "../img/services-1.jpg";
import svImg2 from "../img/services-2.jpg";
import svImg3 from "../img/services-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbSitemap, TbBusinessplan } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import CountUp from "react-countup";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 400,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  return (
    <>
      <SubTitle
        title='회사소개'
        exp='유리찾자는 재고관리와 필요한 자동차 유리의 매칭을 도와주는
          플랫폼입니다.'
      />
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
              data-aos-delay='200'
            >
              <div className='service-item'>
                <div className='img'>
                  <img src={svImg1} className='img-fluid' alt='' />
                </div>
                <div className='details position-relative'>
                  <div className='icon'>
                    <TbSitemap />
                  </div>
                  <a href='#!' className='stretched-link'>
                    <h3>자동차 유리 매칭 서비스</h3>
                  </a>
                  <p>
                    전국적인 자동차 유리 부품 공급을 해결하고, 교체점의 오래된
                    재고 판로가 되어드립니다.
                  </p>
                </div>
              </div>
            </div>

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
                  <a href='#!' className='stretched-link'>
                    <h3>자동차 보험 청구 프로그램 제공</h3>
                  </a>
                  <p>
                    유리찾자의 회원이 되시면 자체 개발한 자동차 유리 보험
                    청구프로그램 무상으로 제공 합니다.
                  </p>
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
                  <a href='#!' className='stretched-link'>
                    <h3>교육 프로그램 제공</h3>
                  </a>
                  <p>
                    정확하고 안전한 자동차 유리 교체 및 복원을 위한 교육
                    프로그램을 제공합니다.
                  </p>
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
