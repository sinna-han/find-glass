import React from "react";
import SubTitle from "../components/SubTitle";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardReview from "../components/CardReview";
import crImg1 from "../img/avata1.jpg";
import crImg2 from "../img/avata2.jpg";
import crImg3 from "../img/avata3.jpg";
import crImg4 from "../img/avata4.jpg";
import "swiper/css";
import "swiper/css/pagination";

export default function Cooperation() {
  return (
    <>
      <SubTitle
        title='우수 협력점'
        exp='자동차 유리 교체 안전 교육을 이수한 우수 협력점입니다.'
      />
      <section id='testimonials' className='testimonials'>
        <div className='container'>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 3000 }}
          >
            <div className='swiper-wrapper'>
              <SwiperSlide>
                <CardReview
                  contents='자동차 유리 교체 안전 교육을 이수한 우수 협력점
                    에스에이 글라스 서울 북부점 입니다. 유리찾자를 통해 전문적인 유리교체 방법을 배울 수 있었습니다. 체계적인 매장운용에 도움이 될 것 같습니다. 앞으로도 유리찾자와 쭈욱~ 함께 하고 싶습니다.'
                  imgUrl={crImg1}
                  Name='김영일 대표'
                  area='에스에이 글라스 서울 북부'
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardReview
                  contents='유리찾자에서 제공하는 전문적인 유리관련 교육에 많은 도움을 받았습니다. 유리교체에 필요한 소모품들도 저렴한 가격에 공급받을 수 있어서 여러모로 도움이 되네요. 항상 친절하고 디테일하게 알려주셔서 감사합니다.'
                  imgUrl={crImg2}
                  Name='박수만 대표'
                  area='에스에이 글라스 화성 남양'
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardReview
                  contents='자동차 유리교체에 대해 디테일하게 교육해주셔서 도움이 되었습니다. 협력점에게 무상으로 제공되는 보험청구프로그램도 업무효율을 높여줘서 만족스럽습니다. 진작 이런 시스템이 있었으면 좋았겠지만 이제라도 알게되어 다행입니다.'
                  imgUrl={crImg3}
                  Name='이재천 대표'
                  area='에스에이 글라스 용인 수지 '
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardReview
                  contents='전문적인 교육과 더불어 보험청구프로그램까지 무료로 제공되니 협력점 되길 잘했다 싶습니다. 구하기 어려운 예전 차종유리를 예전보다 쉽게 구할 수 있을것 같아 기대가 됩니다. '
                  imgUrl={crImg4}
                  Name='최태수 대표'
                  area='에스에이 글라스 인천 '
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
      <section className='container mx-auto my-5 text-center'>
        <table className='table table-striped table-hover mt-5'>
          <colgroup>
            <col width='16%' />
            <col width='16%' />
            <col width='28%' />
            <col width='' />
          </colgroup>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>순번</th>
              <th scope='col'>지역</th>
              <th scope='col'>상호</th>
              <th scope='col'>주소</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            <tr>
              <td>1 </td>
              <td>서울 </td>
              <td className='td_left_p5'>에스에이 글라스 서울 북부 </td>
              <td className='td_left_p5'>
                서울 도봉구 방학로 196, 1층 3호 (방학동 283-2, 미륭프라자) 
              </td>
            </tr>
            <tr>
              <td>2 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 하남 </td>
              <td className='td_left_p5'>
                경기 하남시 덕풍북로 259번길 48, 1층 (덕풍동 813) 
              </td>
            </tr>
            <tr>
              <td>3 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 광명 </td>
              <td className='td_left_p5'>
                경기 광명시 일직로99번안길 2, 1층 (일직동 505-12 1층) 
              </td>
            </tr>
            <tr>
              <td>4 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 김포 </td>
              <td className='td_left_p5'>
                경기 김포시 김포한강2로24번길 116-9 (장기동 1936-10) 
              </td>
            </tr>
            <tr>
              <td>5 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 성남 분당 </td>
              <td className='td_left_p5'>
                경기 성남시 분당구 불정로420번길 40,1층 101호 (분당동 97-8) 
              </td>
            </tr>
            <tr>
              <td>6 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 여주 </td>
              <td className='td_left_p5'>
                경기 여주시 향교로 101 (월송동 106-3) 
              </td>
            </tr>
            <tr>
              <td>7 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 용인 수지 </td>
              <td className='td_left_p5'>
                경기 용인시 수지구 문인로31번길 3-20, 1층 (풍덕천동 671-1) 
              </td>
            </tr>
            <tr>
              <td>8 </td>
              <td>경기 </td>
              <td className='td_left_p5'>에스에이 글라스 화성 남양 </td>
              <td className='td_left_p5'>
                경기 화성시 남양읍 남양시장로42번길 11-1(남양리 667) 
              </td>
            </tr>
            <tr>
              <td>9 </td>
              <td>인천 </td>
              <td className='td_left_p5'>에스에이 글라스 인천 </td>
              <td className='td_left_p5'>
                인천 중구 인중로 43 (신흥동3가 34-1) 
              </td>
            </tr>
            <tr>
              <td>10 </td>
              <td>강원 </td>
              <td className='td_left_p5'>에스에이 글라스 강릉 </td>
              <td className='td_left_p5'>
                강원 강릉시 강릉대로 433 (포남동 1073-8) 
              </td>
            </tr>
            <tr>
              <td>11 </td>
              <td>강원 </td>
              <td className='td_left_p5'>에스에이 글라스 원주 </td>
              <td className='td_left_p5'>
                강원 원주시 우무개로 7, 1층 (우산동 96-1) 
              </td>
            </tr>
            <tr>
              <td>12 </td>
              <td>충남 </td>
              <td className='td_left_p5'>에스에이 글라스 충남 아산 </td>
              <td className='td_left_p5'>
                충남 아산시 온천대로1178-1 (득산동 303-1) 
              </td>
            </tr>
            <tr>
              <td>13 </td>
              <td>충남 </td>
              <td className='td_left_p5'>에스에이 글라스 충남 천안 </td>
              <td className='td_left_p5'>
                충남 천안시 서북구 서부대로 454 (쌍용동 862) 
              </td>
            </tr>
            <tr>
              <td>14 </td>
              <td>대구 </td>
              <td className='td_left_p5'>에스에이 글라스 대구 서구 </td>
              <td className='td_left_p5'>
                대구 서구 팔달로 84 (비산동 1382-2) 
              </td>
            </tr>
            <tr>
              <td>15 </td>
              <td>경북 </td>
              <td className='td_left_p5'>에스에이 글라스 영주 </td>
              <td className='td_left_p5'>
                경북 영주시 구성로88번길 204 (휴천동 1732-3) 
              </td>
            </tr>
            <tr>
              <td>16 </td>
              <td>부산 </td>
              <td className='td_left_p5'>에스에이 글라스 부산 사상 </td>
              <td className='td_left_p5'>
                부산 사상구 대동로 49, 1층 (엄궁동 6-10) 
              </td>
            </tr>
            <tr>
              <td>17 </td>
              <td>울산 </td>
              <td className='td_left_p5'>에스에이 글라스 울산 </td>
              <td className='td_left_p5'>
                울산 북구 진장로 66 (진장동 500-1) 
              </td>
            </tr>
            <tr>
              <td>18 </td>
              <td>광주 </td>
              <td className='td_left_p5'>에스에이 글라스 광주 광산 </td>
              <td className='td_left_p5'>
                광주 광산구 하남산단4번로 177 (장덕동 983-10) 
              </td>
            </tr>
            <tr>
              <td>19 </td>
              <td>전남 </td>
              <td className='td_left_p5'>에스에이 글라스 여수 </td>
              <td className='td_left_p5'>
                전남 여수시 좌수영로 320 (오림동 395-6) 
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
