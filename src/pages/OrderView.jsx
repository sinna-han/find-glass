import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SubTitle from "../components/SubTitle";
import brandLogo1 from "../img/hyundai_logo.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";

export default function OrderView() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SubTitle
        title='주문 상세 내역'
        exp='주문하신 상품정보에 대한 상세 내역입니다.'
      />
      <div className='container mx-auto my-4 my-md-5 order_div'>
        <div className='d-flex justify-content-between"'>
          <div className='flex-shrink-1 point_txt_s'>
            주문번호 : 2022122016411898{" "}
          </div>
          <div className='w-100 text-end'>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open}
              variant='outline-secondary'
            >
              상태 프로세스
            </Button>
            <Collapse in={open}>
              <div id='example-collapse-text' className='pt-2'>
                주문 > 입금 > 준비 > 배송 > 완료
              </div>
            </Collapse>
          </div>
        </div>
        <div className='table-responsive-md'>
          <table className='table align-middle table-hover mt-3 text-center order_view_table'>
            <colgroup>
              <col width='' />
              <col width='8%' />
              <col width='14%' />
              <col width='14%' />
              <col width='14%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>상품정보</th>
                <th scope='col'>수량</th>
                <th scope='col'>판매가격</th>
                <th scope='col'>총구매금액</th>
                <th scope='col'>상태</th>
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
                <td>주문</td>
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
            <div className='bg-light table-responsive-md'>
              <table className='table align-middle tableTrpad'>
                <colgroup>
                  <col width='30%' />
                  <col width='' />
                </colgroup>
                <tr>
                  <th>이름</th>
                  <td>
                    <input
                      type='text'
                      readonly
                      class='form-control-plaintext'
                      id='staticName'
                      value='홍길동'
                    />
                  </td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>
                    <input
                      type='text'
                      readonly
                      class='form-control-plaintext'
                      id='staticPhone'
                      value='010-1231-4567'
                    />
                  </td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>
                    <input
                      type='text'
                      readonly
                      class='form-control-plaintext'
                      id='staticPhone'
                      value='(18322) 경기도 화성시 봉담읍 주석로 1166-3 '
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
          <div className='bg-light p-4 table-responsive-md'>
            <table className='table align-middle tableTrpad'>
              <colgroup>
                <col width='30%' />
                <col width='' />
              </colgroup>
              <tr>
                <th>주문일시</th>
                <td>2022-12-20 16:41:33</td>
              </tr>
              <tr>
                <th>결제수단</th>
                <td>무통장입금 농협 317-0025-7875-41 (주)에스에이시스템</td>
              </tr>
              <tr>
                <th>결제금액</th>
                <td>
                  아직 입금되지 않았거나 입금정보를 입력하지 못하였습니다.
                </td>
              </tr>
            </table>
          </div>
          <div className='text-center'>
            <Button
              type='submit'
              className=' btn btn-md-lg bgPurple2 my-3 my-md-5'
            >
              주문취소하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
