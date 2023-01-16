import React, { useEffect } from "react";
import SubTitle from "../components/SubTitle";
import cpImg1 from "../img/companyImg1.jpg";
import cpImg2 from "../img/companyImg2.jpg";
import cpImg3 from "../img/companyImg3.jpg";
import cpImg4 from "../img/companyImg4.jpg";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheck2 } from "react-icons/bs";

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

      <section className='features '>
        <div className='container '>
          <div
            className='row features-item align-items-center gx-md-5'
            data-aos='fade-up'
          >
            <div className='col-md-5'>
              <img
                src={cpImg1}
                className='img-fluid rounded'
                alt='이미지설명'
              />
            </div>
            <div className='col-md-7'>
              <h3>국내 최초 자동차 유리 온라인 마켓플레이스</h3>
              <p className='fst-italic'>
                자동차 유리는 배송 중 파손 위험 등으로 현재까지 온라인에서
                판매되는 경우가 없습니다. 필요한 유리를 자동차 유리 대리점으로
                전화로 주문하는 방법밖에 없었고, 대리점 재고가 없는 유리 제품의
                경우 소비자의 요청이 있어도 서비스를 포기해야 했습니다.{" "}
              </p>
              <ul>
                <li>
                  <BsCheck2 className='icon' /> <span>유리찾자</span>는 대리점에
                  없는 다양한 유리 재고 중계가 가능합니다.
                </li>
                <li>
                  <BsCheck2 className='icon' /> <span>유리찾자</span>는 시중에서
                  구하기 어려운 유리도 검색을 통해 쉽게 찾을 수 있습니다.
                </li>
                <li>
                  <BsCheck2 className='icon' /> <span>유리찾자</span>는 소비자의
                  요청에 바로 대응 할 수 있어 편리합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='features features-bg'>
        <div className='container'>
          <div
            className='row features-item align-items-center gx-md-5'
            data-aos='fade-up'
          >
            <div className='col-md-5 order-md-2'>
              <img
                src={cpImg2}
                className='img-fluid rounded'
                alt='이미지설명'
              />
            </div>
            <div className='col-md-7 order-md-1 '>
              <h3>자동차 유리 시장에 대한 풍부한 네트워크</h3>
              <p className='fst-italic'>
                자동차 유리 교체점은 전국에 약 1천개로 매우 적고 폐쇄적인
                시장입니다. 유리찾자는 자동차 유리 교체점과 직접 교류하고 필요한
                시장 네트워크를 구비하고 있습니다.
              </p>
              <ul>
                <li>
                  <BsCheck2 className='icon' /> 약 800여 유리 교체점 네트워크
                </li>
                <li>
                  <BsCheck2 className='icon' /> 전국 10개의 자동차 유리
                  대리점(현대모비스, 삼성, 쌍용, GM) 및 5개의 자동차 유리 수입사
                </li>
                <li>
                  <BsCheck2 className='icon' /> 전국 400여개의 전국 자동차 유리
                  정비조합과의 네트워크
                </li>
                <li>
                  <BsCheck2 className='icon' />약 5,000여개의 자동차 1,2급
                  정비공장 네트워크
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='features '>
        <div className='container'>
          <div
            className='row features-item align-items-center gx-md-5'
            data-aos='fade-up'
          >
            <div className='col-md-5'>
              <img
                src={cpImg3}
                className='img-fluid rounded'
                alt='이미지설명'
              />
            </div>
            <div className='col-md-7'>
              <h3>파손에 민감한 자동차 유리의 배송 문제 해결</h3>
              <p className='fst-italic'>
                지역 전문가 제도를 이용하여 그 지역의 소비자와 구매자가 지역
                전문가의 위치까지 직접 배송합니다.
              </p>
              <ul>
                <li>
                  <BsCheck2 className='icon' /> 파손으로 인한 분쟁을 해결
                </li>
                <li>
                  <BsCheck2 className='icon' /> 순정과 비순정 제품을 판별
                </li>
                <li>
                  <BsCheck2 className='icon' /> 파손이나 스크래치를 검증
                </li>
                <li>
                  <BsCheck2 className='icon' /> 지역 내 판매자간의 거래 절벽
                  해소 가능
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='features  features-bg'>
        <div className='container'>
          <div
            className='row features-item align-items-center gx-md-5'
            data-aos='fade-up'
          >
            <div className='col-md-5 order-md-2'>
              <img
                src={cpImg4}
                className='img-fluid rounded'
                alt='이미지설명'
              />
            </div>
            <div className='col-md-7 order-md-1'>
              <h3>자동차 유리 교체, 복원 및 틴팅 교육</h3>
              <p className='fst-italic'>
                유리찾자는 창업팀은 자동차 유리 교체, 복원, 틴팅(썬팅)에 대한
                다양한 지식을 바탕으로 자동차 유리 교체점과 정기적인 교류를 하고
                업데이트 된 제품 등의 교육을 함으로써 네트워크를 더욱 공고히
                하려 합니다.
              </p>
              <ul>
                <li>
                  <BsCheck2 className='icon' /> 국내 자동차 유리 교체 업종에
                  종사하시는 분들의 전문성을 함양
                </li>
                <li>
                  <BsCheck2 className='icon' /> 제품에 따른 체계적이고 선진적인
                  교육
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='faq' className='faq'>
        <div className='container' data-aos='fade-up'>
          <div className='my-4'>
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <Accordion flush>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    지역전문가는 어떻게 운영되나요?
                  </Accordion.Header>
                  <Accordion.Body>
                    묶음 단위의 지역에 지역 전문가 최소 1개소 이상 운영됩니다.
                    전국적으로 20개소~60개소의 지역 전문가를 선발, 건당 약
                    5만원~10만원 정도의 운송 및 검수료를 받게됩니다. 선발되면
                    본사에서 약 1~2일 유리 검수 방법에 대해 교육을 받고 업무에
                    임하게 됩니다. 지역전문가의 수익은 본사와 수수료를 나누지는
                    않습니다.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    자동차 보험 청구 프로그램을 이용하려면 어떻게 해야하나요?
                  </Accordion.Header>
                  <Accordion.Body>
                    자동차 유리 보험 청구 프로그램은 협력사를 통해 무상으로
                    지원합니다.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    자동차 유리 교체, 복원 및 틴팅 교육은 어디서 받나요?
                  </Accordion.Header>
                  <Accordion.Body>
                    연 2회 진행되는 교육은 유리찾자 본점에서 진행합니다. 그 외에
                    추가로 진행되는 교육은 교육의 성격에 따라 진행되는 장소가
                    변경될 예정입니다. 이 부분은 추후 공지하도록 하겠습니다.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className='col-lg-6'>
              <Accordion flush>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    판매자와 직접 통화가 가능한가요?
                  </Accordion.Header>
                  <Accordion.Body>
                    유리찾자는 자동차유리 중개 플랫폼으로 판매자와 구매자의
                    중간에서 필요한 일들을 수행합니다. 궁금한 사항은 유리찾자를
                    통해 해결 하실 수 있습니다.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    유리찾자 가입 혜택이 있나요?
                  </Accordion.Header>
                  <Accordion.Body>
                    유리찾자 오픈기념 이벤트
                    <br />
                    1. 서비스 개시 후 1년간 거래 수수료 할인 (20% -> 10% 예정)
                    <br />
                    2. 공동구매를 통한 ‘수입자동차 유리’ 구매시 할인 제공
                    <br />
                    3. 자동차 유리를 위해 꼭 필요한 공구, 접착제 등을 할인해서
                    판매 <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    주문 후 배송까지 얼마나 걸리나요?
                  </Accordion.Header>
                  <Accordion.Body>
                    주문 후 3일 이내로 받아 보실 수 있습니다. 주문 후
                    지역전문가가 판매자의 유리를 검수하고 배송까지 하는 시간이
                    필요하기 때문입니다.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
