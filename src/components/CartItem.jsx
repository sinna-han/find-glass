import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function CartItem({ carName, carExp, price, amount }) {
  return (
    <tr>
      <td>
        <div>
          <input
            className='form-check-input'
            type='checkbox'
            id='checkboxNoLabel'
            value=''
            aria-label='선택'
          />
        </div>
      </td>
      <td>
        {carName} {carExp}
      </td>
      <td>
        <div className='input-group'>
          <input
            type='text'
            id='amount'
            className='form-control'
            placeholder='수량'
            value={amount}
          />
          <button className='btn btn-outline-secondary' type='button'>
            <FaAngleDown />
          </button>
          <button className='btn btn-outline-secondary' type='button'>
            <FaAngleUp />
          </button>
        </div>
      </td>
      <td>{price}원</td>
    </tr>
  );
}
