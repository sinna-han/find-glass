import React from "react";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className='row justify-content-center'>
      <div className='col-8'>
        <Form className='search_bar'>
          <input
            type='text'
            className='form-control'
            id='floatingInputValue'
            placeholder='검색하실 상품을 입력해주세요.'
          />
          <BsSearch className='fa-solid' />
        </Form>
      </div>
    </div>
  );
}
