import React from "react";
import SubTitle from "../components/SubTitle";
import { MdEmail, MdLocationOn, MdContactPhone } from "react-icons/md";
import Map from "../components/Map";

export default function Contact() {
  return (
    <>
      <SubTitle
        title='연락처'
        exp='유리찾자와 함께 나누고픈 이야기를 남겨주세요.'
      />
      <section id='contact' className='contact'>
        <div className='container mx-auto my-5'>
          <div className='row'>
            <div className='col-lg-5 d-flex align-items-stretch'>
              <div className='info'>
                <div className='address'>
                  <MdLocationOn className='iconBg' />
                  <h4>Location:</h4>
                  <p>(18322) 경기도 화성시 봉담읍 주석로 1166-3</p>
                </div>

                <div className='email'>
                  <MdEmail className='iconBg' />
                  <h4>Email:</h4>
                  <p>joonnam.lee@sasystem.co.kr</p>
                </div>

                <div className='phone'>
                  <MdContactPhone className='iconBg' />
                  <h4>Call:</h4>
                  <p>031-546-3694</p>
                </div>
                <Map />
              </div>
            </div>

            <div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
              <form action='' method='post' role='form' className='email-form'>
                <div className='row'>
                  <div className='form-group col-md-6'>
                    <label for='name'>이름</label>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label for='name'>이메일</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      required
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label for='name'>제목</label>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    required
                  />
                </div>
                <div className='form-group'>
                  <label for='name'>내용</label>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='10'
                    required
                  ></textarea>
                </div>
                <div className='my-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message'></div>
                  <div className='sent-message'>
                    감사합니다. 확인 후 연락드리겠습니다.
                  </div>
                </div>
                <div className='text-center'>
                  <button type='submit'>확인</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
