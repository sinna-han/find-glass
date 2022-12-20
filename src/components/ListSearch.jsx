import React from "react";
import { FaTruck, FaCartPlus } from "react-icons/fa";
export default function ListSearch(props) {
  return (
    <a
      href='#'
      className='list-group-item list-group-item-action d-flex gap-4 p-4'
      aria-current='true'
    >
      <img
        src={props.imgUrl}
        alt={props.imgName}
        className='img-thumbnail p-3 flex-shrink-1'
      />
      <div className='d-flex gap-4 w-100 justify-content-between'>
        <div className='me-auto'>
          <h4 className='mb-2'>{props.carExp}</h4>
          <p className='mb-0 opacity-75'>{props.carName}</p>
        </div>
        <div className='d-lg-inline-flex'>
          <div className='price_txt flex-shrink-0'>{props.price}원</div>
          <div className='flex-shrink-0 ms-lg-5 text-end'>
            <button
              type='button'
              className='btn btn-outline-dingo btn-sm me-1'
              onclick="location.href='cart.html'"
            >
              <FaCartPlus size='16' />
            </button>
            <button type='button' className='btn btn-outline-dingo btn-sm  '>
              <FaTruck size='16' />
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
