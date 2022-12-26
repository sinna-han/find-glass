import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className='row justify-content-center'>
      <div className='col-10 col-md-8'>
        <div class='input-group mb-3'>
          <input
            type='text'
            class='form-control form-control-lg'
            placeholder='검색하실 자동차유리를 입력하세요'
            aria-label='search'
            aria-describedby='button-addon2'
          />
          <button class='btn bgPurple2' type='button' id='button-addon2'>
            <BsSearch className='fa-solid' />
          </button>
        </div>
      </div>
    </div>
  );
}
