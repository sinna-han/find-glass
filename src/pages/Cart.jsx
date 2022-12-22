import React from "react";
import Button from "react-bootstrap/Button";
import CartItem from "../components/CartItem";
import SubTitle from "../components/SubTitle";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <SubTitle
        title='장바구니'
        exp='구매를 원하시는 상품을 선택 후 주문을 진행하실 수 있습니다.'
      />

      <div className='container mx-auto mb-4 my-md-5 text-center'>
        <div class='table-responsive-md'>
          <table className='table align-middle table-hover mt-4 mt-md-5 cart_table'>
            <colgroup>
              <col width='6%' />
              <col width='' />
              <col width='18%' />
              <col width='18%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>
                  <div>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='checkboxNoLabel'
                      value=''
                      aria-label='전체선택'
                    />
                  </div>
                </th>
                <th scope='col'>상품 정보</th>
                <th scope='col'>수량</th>
                <th scope='col'>구매 금액</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              <CartItem
                carExp='YF 쏘나타 전면유리-쏠라/열선/습기/하이패스'
                carName='서울/현대/쏘나타'
                price='100,000'
                amount='1'
              />
              <CartItem
                carExp='전면유리-쏠라/열선/레인센서/하이패스 (86110- 3S072)'
                carName='서울/현대/쏘나타'
                price='120,000'
                amount='2'
              />
            </tbody>
          </table>
        </div>
        <div className='d-flex align-items-center justify-content-between m-md-1'>
          <div className='cart_btns mt-3'>
            <Button variant='outline-secondary' className='me-1'>
              선택삭제
            </Button>
            <Link className='btn bgPurple' to='/order'>
              주문하기
            </Link>
          </div>
          <div className='nav justify-content-end nav_vr'>
            <p>
              총 구매 금액 : <span className='price_lg'>100,000</span>원
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
