import React from "react";
import { FaTruck, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ListSearch({
  brandImgUrl,
  brandName,
  carExp,
  carName,
  price,
}) {
  return (
    <div className='list-group-item list-group-item-action d-flex gap-4 p-4'>
      <img
        src={brandImgUrl}
        alt={brandName}
        className='img-thumbnail p-3 flex-shrink-1'
      />
      <div className='d-flex gap-3 w-100 justify-content-between'>
        <div className='me-auto'>
          <h4 className='mb-2'>{carExp}</h4>
          <p className='mb-0 opacity-75'>{carName}</p>
        </div>
        <div className='d-lg-inline-flex min-w100'>
          <div className='price_txt flex-md-shrink-0'>{price}원</div>
          <div className='flex-md-shrink-0 ms-lg-5 text-end'>
            <Link to='/cart' className='btn btn-outline-dingo btn-sm me-1'>
              <FaCartPlus size='15' />
            </Link>
            <button type='button' className='btn btn-outline-dingo btn-sm  '>
              <FaTruck size='15' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
