import React from "react";
import SubTitle from "../components/SubTitle";
import brandLogo1 from "../img/hyundai_logo.png";
import { FaCreditCard } from "react-icons/fa";

export default function MyPage() {
  return (
    <>
      <SubTitle
        title='마이페이지'
        exp='회원가입 정보와 주문이력을 확인 합니다.'
      />
      <div className='container mx-auto my-5 order_div'>
        <h4 className='underLine py-4'>
          <FaCreditCard className='me-2' />
          판매 등록한 유리
        </h4>
        <div class='table-responsive-md'>
          <table className='table align-middle table-hover text-center order_table'>
            <colgroup>
              <col width='' />
              <col width='15%' />
              <col width='20%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>상품정보</th>
                <th scope='col'>수량</th>
                <th scope='col'>판매가격</th>
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
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className='underLine py-4 mt-5'>
          <FaCreditCard className='me-2' />
          판매내역조회
        </h4>
        <div class='table-responsive-md'>
          <table className='table align-middle table-hover text-center order_table'>
            <colgroup>
              <col width='25%' />
              <col width='25%' />
              <col width='' />
              <col width='20%' />
              <col width='20%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>주문서번호</th>
                <th scope='col'>판매일시</th>
                <th scope='col'>상품수</th>
                <th scope='col'>판매금액</th>
                <th scope='col'>상태</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              <tr>
                <td>2022122016411898</td>
                <td>22-12-20 16:41 (화)</td>
                <td>1</td>
                <td>686,000,000원</td>
                <td>입금확인중</td>
              </tr>
              <tr>
                <td>2022122016411898</td>
                <td>22-12-20 16:41 (화)</td>
                <td>1</td>
                <td>686,000,000원</td>
                <td>입금확인</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className='underLine py-4 mt-5'>
          <FaCreditCard className='me-2' />
          주문내역조회
        </h4>
        <div class='table-responsive-md'>
          <table className='table align-middle table-hover text-center order_table  mb-5'>
            <colgroup>
              <col width='20%' />
              <col width='20%' />
              <col width='' />
              <col width='20%' />
              <col width='20%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>주문서번호</th>
                <th scope='col'>주문일시</th>
                <th scope='col'>상품수</th>
                <th scope='col'>주문금액</th>
                <th scope='col'>상태</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              <tr>
                <td>2022122016411898</td>
                <td>22-12-20 16:41 (화)</td>
                <td>1</td>
                <td>686,000,000원</td>
                <td>입금확인중</td>
              </tr>
              <tr>
                <td>2022122016411898</td>
                <td>22-12-20 16:41 (화)</td>
                <td>1</td>
                <td>686,000,000원</td>
                <td>입금확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
