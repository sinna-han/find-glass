import React from "react";
import SubTitle from "../components/SubTitle";
import brandLogo1 from "../img/hyundai_logo.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Order() {
  return (
    <>
      <SubTitle
        title='주문하기'
        exp='주문하고자 하시는 상품정보가 맞는지 확인하시고 주문을 진행하세요.'
      />
      <div className='container mx-auto my-md-5 order_div'>
        <div className='table-responsive-md'>
          <table className='table align-middle table-hover mt-3 mt-md-5 text-center order_table'>
            <colgroup>
              <col width='' />
              <col width='10%' />
              <col width='14%' />
              <col width='14%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>상품정보</th>
                <th scope='col'>수량</th>
                <th scope='col'>판매가격</th>
                <th scope='col'>총구매금액</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              <tr>
                <td>
                  <img
                    src={brandLogo1}
                    alt='현대자동차'
                    className='img-thumbnail p-3 order_img me-3'
                  />
                  YF 쏘나타 전면유리-쏠라/열선/습기/하이패스
                </td>
                <td>1</td>
                <td>100,000원</td>
                <td>100,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt-4 mt-md-5 order_info'>
          <div>
            <h4 className='underLine'>
              <BsPersonCircle className='me-2' />
              주문자 정보
            </h4>
            <div className='table-responsive-md bg-light p-4'>
              <table className='table align-middle tableTrpad'>
                <colgroup>
                  <col width='20%' />
                  <col width='' />
                </colgroup>
                <tr>
                  <th>이름</th>
                  <td>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      placeholder='이름을 입력해주세요'
                    />
                  </td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      placeholder='예:01012345667'
                    />
                  </td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>
                    <div className='input-group mb-1'>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='우편번호를 검색하세요.'
                      />
                      <button type='submit' className='btn btn-secondary'>
                        우편번호
                      </button>
                    </div>

                    <input
                      type='text'
                      className='form-control mb-1'
                      id='address'
                      placeholder='우편번호 입력 후 자동입력 됩니다.'
                      required
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      id='address2'
                      placeholder='건물, 아파트, 동/호수 입력'
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <h4 className='underLine mt-4 mt-md-5'>
            <FaCreditCard className='me-2' />
            결제정보
          </h4>
          <div className='table-responsive-md bg-light p-4'>
            <table className='table align-middle'>
              <colgroup>
                <col width='20%' />
                <col width='' />
              </colgroup>
              <tr>
                <th>결제수단</th>
                <td>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio1'
                      value='option1'
                    />
                    <label className='form-check-label' for='inlineRadio1'>
                      무통장입금
                    </label>
                  </div>
                  <br />
                  농협 317-0025-7875-41 (주)에스에이시스템
                </td>
              </tr>
            </table>
          </div>
          <div className='text-center'>
            <Link to='/orderView' className=' btn btn-lg bgPurple2 my-5'>
              주문하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
